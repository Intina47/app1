import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

const xss = require('xss');

dotenv.config();

export default function handler(req, res) {
  // feedback endpoint
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, message } = req.body;

  // validate and sanitize user inputs
  if (!name || !email || !message) {
    res.status(400).json({ error: 'Please fill in all fields' });
  } else {
    const cleanedName = xss(name);
    const cleanedEmail = xss(email);
    const cleanedMessage = xss(message);

    // log
    console.log('Name:', cleanedName);
    console.log('Email:', cleanedEmail);
    console.log('Message:', cleanedMessage);

    if (name !== cleanedName || email !== cleanedEmail || message !== cleanedMessage) {
      res.status(400).json({ error: 'Invalid input' });
      return;
    }

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
      subject: 'User message',
      text: `Name: ${cleanedName}\nEmail: ${cleanedEmail}\nMessage: ${cleanedMessage}`,
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
}
