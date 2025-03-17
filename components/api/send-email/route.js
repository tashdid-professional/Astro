import { Resend } from "resend";

export async function POST(req) {
  try {
    const { name, phone, age, address, experience } = await req.json();
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "your-verified-email@yourdomain.com", // Must be verified in Resend
      to: process.env.RECEIVER_EMAIL, // Your email where you want to receive submissions
      subject: `New Job Application from ${name}`,
      text: `
        Name: ${name}
        Phone: ${phone}
        Age: ${age}
        Address: ${address}
        Experience: ${experience}
      `,
    });

    return Response.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Error sending email", error }, { status: 500 });
  }
}
