import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default function handler(req, res) {
  // feedback endpoint
  const { message } = req.body;
  console.log(message);

  // send email to company
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.COMPANY_EMAIL, // Update with the company email
      pass: process.env.EMAIL_PASSWORD, // Update with the email password
    },
  });

  const mailOptions = {
    from: process.env.COMPANY_EMAIL, // Update with the company email
    to: process.env.COMPANY_EMAIL, // Update with the company email
    subject: 'New Feedback',
    text: `Message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Error sending feedback email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Feedback sent successfully' });
    }
  });
}
