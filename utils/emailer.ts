// sends an email to the user// emailer.ts

import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config();

export async function sendEmail(code: string) {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.COMPANY_EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.COMPANY_EMAIL,
    to: process.env.COMPANY_EMAIL,
    subject: 'Verification Code',
    html: `
      <div style="background-color: #f6f6f6; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto;">
          <h1 style="text-align: center; color: #333;">Welcome</h1>
          <p style="color: #333;">
            Your verification code is:
          </p>
          <h2 style="text-align: center; color: #333;">${code}</h2>
          <p style="color: #333;">
            Please enter this code to verify it's you.
          </p>
        </div>
      </div>
    `,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error('Failed to send email');
  }
}
