import nodemailer from 'nodemailer';

export async function POST(req) {
  console.log("📩 Email API hit");

  try {
    const { email, name, phone, address, total, orderId, items } = await req.json();

    console.log("✅ Data received:", { email, name, phone, address, total, items });

    if (!email || !name) {
      console.error("❌ Missing fields");
      return Response.json({ error: 'Missing fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const itemDetails = items
      .map(item => `• ${item.name} (Qty: ${item.quantity}, Price: $${item.price})`)
      .join("\n");

    const adminMessage = `
New Order:

Order ID : ${orderId}
Name: ${name}
Email: ${email}
Phone: ${phone}
Address: ${address}
Total: $${total}

Items:
${itemDetails}
    `;

    console.log("📧 Sending admin email to:", process.env.ADMIN_EMAIL);

    // Send admin email first
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Order Received",
      text: adminMessage,
    });

    console.log("✅ Admin email sent");

    // Then user confirmation
    const userMailOptions = {
      from: `"Astro Solution" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Order Confirmation',
      html: `<p>Hi ${name},</p><p>Your order has been placed! Your order ID is : ${orderId} We'll confirm it shortly.</p><br/><p>– Team Astro</p>`,
    };

    await transporter.sendMail(userMailOptions);
    console.log("✅ Confirmation email sent to user");

    return Response.json({ success: true });
  } catch (error) {
    console.error('❌ Email error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
