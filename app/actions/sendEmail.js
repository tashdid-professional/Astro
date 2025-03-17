"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData) {
  const { name, email, phone, age, address, experience } = formData;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: "New Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAge: ${age}\nAddress: ${address}\nExperience: ${experience}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email." };
  }
}
