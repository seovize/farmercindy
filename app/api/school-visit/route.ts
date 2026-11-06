import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, organization, email, gradeLevel, visitType, preferredDate, message, honeypot } =
      await req.json();

    if (honeypot) {
      return NextResponse.json({ success: true, spamBlocked: true });
    }

    if (!name || !email || !organization) {
      return NextResponse.json(
        { error: "Name, organization, and email are required." },
        { status: 400 }
      );
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;

    if (!BREVO_API_KEY || BREVO_API_KEY.includes("your-live-brevo-api-key")) {
      console.warn("BREVO_API_KEY is not configured. Simulating visit inquiry receipt.");
      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Thank you! Farmer Cindy's team received your school visit request (Simulated).",
      });
    }

    // In production with live Brevo key, dispatch notification via Brevo transactional email
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        subject: `New School Visit Request: ${organization} (${name})`,
        sender: { name: "Farmer Cindy Web Platform", email: "info@farmercindy.org" },
        to: [{ email: "farmercindy711@gmail.com", name: "Farmer Cindy" }],
        htmlContent: `
          <h3>New School / Library Reading Request</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Organization:</strong> ${organization}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Grade Level:</strong> ${gradeLevel || "Not specified"}</p>
          <p><strong>Visit Type:</strong> ${visitType || "Virtual / In-Person"}</p>
          <p><strong>Preferred Date:</strong> ${preferredDate || "Flexible"}</p>
          <p><strong>Message:</strong> ${message || "None"}</p>
        `,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error("Brevo SMTP error:", err);
    }

    return NextResponse.json({
      success: true,
      message: "Your school visit request was received! Cindy's team will contact you within 24-48 hours.",
    });
  } catch (error: any) {
    console.error("School visit route error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
