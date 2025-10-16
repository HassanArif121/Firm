"use server";

import nodemailer from "nodemailer";

interface EmailParams {
  to: string; // This should be renamed to "email" or "userEmail" to avoid confusion
  subject: string;
  text: string;
}

export async function emailSend(param: EmailParams): Promise<boolean> {
  const { to, subject, text } = param;
  
  // Validate environment variables
  if (!process.env.EMAIL_SERVER_USER || !process.env.EMAIL_SERVER_PASS) {
    console.error("Missing email configuration in environment variables");
    throw new Error("Email service not configured");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASS,
    },
  });

  try {
    await transporter.verify();
    
    // Send TO your email (you receive it)
    // FROM the user's email (so you can reply)
    await transporter.sendMail({
      from: process.env.EMAIL_SERVER_USER, // Your Gmail (required by Gmail)
      to: process.env.EMAIL_SERVER_USER, // Send TO yourself
      replyTo: to, // User's email for reply
      subject: `Contact Form: ${subject}`,
      text: `From: ${to}\n\nSubject: ${subject}\n\nMessage:\n${text}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #64ffda;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${to}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 1px solid #64ffda;" />
          <p><strong>Message:</strong></p>
          <p>${text.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });
    
    console.log("Contact form email sent successfully from:", to);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}