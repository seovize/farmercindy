import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, role = "Parent", honeypot } = await req.json();

    // 1. Honeypot check for spambot elimination
    if (honeypot) {
      return NextResponse.json({ success: true, spamBlocked: true });
    }

    // 2. Validate & sanitize email syntax
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail) || cleanEmail.length > 254) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_LIST_ID = Number(process.env.BREVO_LIST_ID || 2);

    // 3. Graceful fallback if API key is not yet configured in local environment
    if (!BREVO_API_KEY || BREVO_API_KEY.includes("your-live-brevo-api-key")) {
      console.warn("BREVO_API_KEY is not configured. Simulating successful contact creation for local dev.");
      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Activity Kit registration confirmed (Local Simulated Mode).",
      });
    }

    // 4. Dispatch request to Brevo v3 Contacts API
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: cleanEmail,
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
        attributes: {
          ROLE: role,
          ACTIVITY_KIT_DOWNLOAD: true,
          SOURCE: "Website_Activity_Kit_2026",
        },
      }),
    });

    if (!response.ok) {
      const errData = await response.json();
      // If contact already exists in list, treat as success
      if (errData.code === "duplicate_parameter") {
        return NextResponse.json({
          success: true,
          alreadySubscribed: true,
          message: "Welcome back! Your activity kit is on its way.",
        });
      }
      return NextResponse.json(
        { error: errData.message || "Failed to register with email system." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Success! Check your inbox for the printable activity kit.",
    });
  } catch (error: any) {
    console.error("Newsletter route error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
