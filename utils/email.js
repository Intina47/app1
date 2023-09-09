import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.COMPANY_EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export const sendMagicLinkEmail = async (toEmail, linkPromise) => {
    const link = await linkPromise;
    const html = `
    <div style="font-family: Arial, sans-serif; text-align: center; background-color: #f4f4f4; padding: 20px;">
      <h1 style="color: #333;">Generate your Entry Pass</h1>
      <p style="color: #666;">Click the button below to generate your pass</p>
      <p style="text-align: center;">
        <a href="${link}" style="display: inline-block; padding: 10px 20px; background-color: #f0d58b; color: #000; text-decoration: none; border-radius: 30px; transition: background-color 0.3s, transform 0.3s;">
          Generate Pass
        </a>
      </p>
      <style>
        a:hover {
          background-color: #f4e64b; /* Change color on hover */
          transform: scale(1.05); /* Add a scale effect on hover */
        }
      </style>
    </div>
  `;

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: toEmail,
        subject: 'Afro Beats Magic Link',
        html,
    };

    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error){
        console.log(error);
        return false;
    }
};
