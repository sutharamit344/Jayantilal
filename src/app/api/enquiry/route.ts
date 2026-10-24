import { NextResponse } from "next/server";

interface EnquiryPayload {
  name?: string;
  phone?: string;
  email?: string;
  preferredLanguage?: string;
  enquiryType?: string;
  message?: string;
  consent?: boolean;
  hp_website?: string; // Honeypot field
}

export async function POST(request: Request) {
  try {
    const body: EnquiryPayload = await request.json();

    // 1. Honeypot check for spam bots
    if (body.hp_website && body.hp_website.trim().length > 0) {
      // Silently return success to bot without processing
      return NextResponse.json(
        { success: true, message: "Enquiry recorded successfully." },
        { status: 200 }
      );
    }

    // 2. Validate Name
    const name = body.name?.trim();
    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid full name (2 to 100 characters)." },
        { status: 400 }
      );
    }

    // 3. Validate Phone Number (Indian mobile pattern: 10 digits starting with 6-9, optional +91 or 0 prefix)
    const phone = body.phone?.replace(/[\s\-\(\)]/g, "");
    const phoneRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
    if (!phone || !phoneRegex.test(phone)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }

    // 4. Validate Optional Email
    if (body.email && body.email.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email.trim())) {
        return NextResponse.json(
          { success: false, error: "Please provide a valid email address or leave it blank." },
          { status: 400 }
        );
      }
    }

    // 5. Validate Consent
    if (!body.consent) {
      return NextResponse.json(
        { success: false, error: "Please acknowledge consent to receive consultation communication." },
        { status: 400 }
      );
    }

    // 6. Normalise inputs
    const sanitizedEnquiry = {
      name,
      phone,
      email: body.email?.trim() || null,
      preferredLanguage: body.preferredLanguage || "en",
      enquiryType: body.enquiryType || "General Consultation",
      message: body.message?.slice(0, 1000) || "",
      timestamp: new Date().toISOString(),
    };

    // In production without external CRM configured, we record the sanitized submission event
    console.log("[Enquiry Received - Ready for Notification]", {
      name: sanitizedEnquiry.name,
      phone: sanitizedEnquiry.phone.replace(/(\d{2})\d{6}(\d{2})/, "$1******$2"), // Masked for privacy in logs
      enquiryType: sanitizedEnquiry.enquiryType,
      preferredLanguage: sanitizedEnquiry.preferredLanguage,
      timestamp: sanitizedEnquiry.timestamp,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Jayantilal Suthar will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Enquiry Endpoint Error]:", error);
    return NextResponse.json(
      { success: false, error: "Unable to process enquiry at this moment. Please call directly." },
      { status: 500 }
    );
  }
}
