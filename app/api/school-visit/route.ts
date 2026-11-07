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

    const cleanEmail = String(email).trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail) || cleanEmail.length > 254) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const cleanName = String(name).slice(0, 100).replace(/[<>]/g, "");
    const cleanOrg = String(organization).slice(0, 120).replace(/[<>]/g, "");
    const cleanMsg = String(message || "").slice(0, 1000).replace(/[<>]/g, "");

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
        subject: `New School Visit Request: ${cleanOrg} (${cleanName})`,
        sender: { name: "Farmer Cindy Web Platform", email: "info@farmercindy.org" },
        to: [{ email: "farmercindy711@gmail.com", name: "Farmer Cindy" }],
        htmlContent: `
          <h3>New School / Library Reading Request</h3>
          <p><strong>Name:</strong> ${cleanName}</p>
          <p><strong>Organization:</strong> ${cleanOrg}</p>
          <p><strong>Email:</strong> ${cleanEmail}</p>
          <p><strong>Grade Level:</strong> ${gradeLevel || "Not specified"}</p>
          <p><strong>Visit Type:</strong> ${visitType || "Virtual / In-Person"}</p>
          <p><strong>Preferred Date:</strong> ${preferredDate || "Flexible"}</p>
          <p><strong>Message:</strong> ${cleanMsg || "None"}</p>
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
