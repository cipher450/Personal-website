import nodemailer from "nodemailer";
import type { APIRoute } from "astro";
import dotenv from "dotenv";
dotenv.config();
export const post: APIRoute = async ({ request }) => {
  const body = await request.json();

  if (!body.name || !body.email || !body.message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: body.email,
    to: import.meta.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${body.name}`,
    text: `
      Hello,
  
      You’ve received a new message through the contact form:
  
      Name: ${body.name}
      Email: ${body.email}
      Message: 
      ${body.message}
  
      Best regards,
      Porfolio website
    `,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #4A90E2;">Hello,</h2>
        <p>You’ve received a new message through the contact form:</p>
        <ul style="list-style: none; padding: 0;">
          <li><strong>Name:</strong> ${body.name}</li>
          <li><strong>Email:</strong> ${body.email}</li>
          <li><strong>Message:</strong></li>
        </ul>
        <p style="background: #f9f9f9; padding: 10px; border-left: 4px solid #4A90E2;">${body.message}</p>
        <p>Best regards,<br>Your Website Team</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error sending email" }), {
      status: 500,
    });
  }
};
