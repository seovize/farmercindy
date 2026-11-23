import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      customer,
      shippingAddress,
      shippingMethod,
      items,
      subtotal,
      discount,
      shipping,
      total,
      taxReceiptRequested,
      isGift,
      giftMessage,
    } = body;

    // Normalize customer name and address across both payload shapes
    const email = customer?.email;
    const name = customer?.name || `${customer?.firstName || ""} ${customer?.lastName || ""}`.trim();
    const address = shippingAddress?.street || customer?.address || customer?.streetAddress;
    const city = shippingAddress?.city || customer?.city;
    const state = shippingAddress?.state || customer?.state;
    const zip = shippingAddress?.zip || customer?.zip || customer?.zipCode;

    // Validate essential fields
    if (!email || !name || !address || !city || !zip) {
      return NextResponse.json(
        { success: false, error: "Please provide all required shipping address details." },
        { status: 400 }
      );
    }

    if (!items || items.length === 0) {
      return NextResponse.json(
        { success: false, error: "Your cart is empty." },
        { status: 400 }
      );
    }

    // Generate unique order reference number: FC-2026-XXXX
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderId = `FC-2026-${randomSuffix}`;
    const orderDate = new Date().toISOString();

    const orderData = {
      orderId,
      orderDate,
      customer: {
        ...customer,
        name,
        email,
        address,
        city,
        state,
        zip,
      },
      shippingAddress: shippingAddress || {
        street: address,
        city,
        state,
        zip,
      },
      shippingMethod: shippingMethod || "Standard Non-Profit Ground",
      items,
      subtotal,
      discount: discount || 0,
      shipping: shipping || 0,
      total,
      isGift: !!isGift,
      giftMessage: giftMessage || "",
      taxReceiptRequested: !!taxReceiptRequested,
      status: "Confirmed",
      estimatedDelivery: "3-5 Business Days",
      trackingNumber: `USPS-940011189956${Math.floor(100000 + Math.random() * 900000)}`,
    };

    // Forward to Brevo CRM if API key exists
    const brevoKey = process.env.BREVO_API_KEY;
    if (brevoKey) {
      try {
        await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": brevoKey,
          },
          body: JSON.stringify({
            sender: { name: "Farmer Cindy Books", email: "orders@farmercindy.com" },
            to: [{ email, name }],
            subject: `Order Confirmation: ${orderId} - The Adventures of Farmer Cindy`,
            htmlContent: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
                <h1 style="color: #0D3829;">Thank You for Your Order, ${name}!</h1>
                <p>Your order <strong>${orderId}</strong> has been received and is being hand-packed with care.</p>
                <div style="background-color: #FAF7F2; padding: 15px; border-radius: 8px; margin: 15px 0; border: 1px solid #DDA15E;">
                  <h3 style="margin-top: 0; color: #0D3829;">Order Details:</h3>
                  <p><strong>Total:</strong> $${total.toFixed(2)} USD</p>
                  <p><strong>Shipping to:</strong> ${address}, ${city}, ${state} ${zip}</p>
                  <p><strong>Bonus Gift:</strong> 1 FREE Baker Creek Heirloom Seed Packet Included!</p>
                </div>
                <p>100% of proceeds support <strong>FarmerCindy, Inc. 501(c)(3)</strong> youth farming literacy.</p>
              </div>
            `,
          }),
        });
      } catch (crmErr) {
        console.warn("Brevo order notification failed silently", crmErr);
      }
    }

    return NextResponse.json({
      success: true,
      order: orderData,
    });
  } catch (error: any) {
    console.error("Checkout processing error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error while processing your order." },
      { status: 500 }
    );
  }
}
