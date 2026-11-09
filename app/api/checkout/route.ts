import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customer, shippingMethod, items, subtotal, discount, shipping, total, taxReceiptRequested } = body;

    // Validate essential fields
    if (!customer?.email || !customer?.name || !customer?.address || !customer?.city || !customer?.zip) {
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
      customer,
      items,
      shippingMethod: shippingMethod || "Standard Non-Profit Ground",
      subtotal,
      discount: discount || 0,
      shipping: shipping || 0,
      total,
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
            to: [{ email: customer.email, name: customer.name }],
            subject: `Order Confirmation: ${orderId} - The Adventures of Farmer Cindy`,
            htmlContent: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
                <h1 style="color: #0D3829;">Thank You for Your Order, ${customer.name}!</h1>
                <p>Your order <strong>${orderId}</strong> has been received and is being hand-packed with care.</p>
                <div style="background-color: #FAF7F2; padding: 15px; border-radius: 8px; margin: 15px 0; border: 1px solid #DDA15E;">
                  <h3 style="margin-top: 0; color: #0D3829;">Order Details:</h3>
                  <p><strong>Total:</strong> $${total.toFixed(2)} USD</p>
                  <p><strong>Shipping to:</strong> ${customer.address}, ${customer.city}, ${customer.state} ${customer.zip}</p>
                  <p><strong>Bonus Gift:</strong> Free Organic Heirloom Strawberry Seeds Included!</p>
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
