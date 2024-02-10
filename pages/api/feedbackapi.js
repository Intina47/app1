import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

const xss = require('xss');

dotenv.config();

// Function to sanitize inputs
function sanitizeInputs(input) {
  return xss(input);
}

// Function to validate inputs
function validateInputs(inputs) {
  return Object.values(inputs).every((input) => input && input === sanitizeInputs(input));
}

// Function to create mail options
function createMailOptions(inputs) {
  return {
    from: process.env.COMPANY_EMAIL,
    replyTo: inputs.email,
    to: process.env.COMPANY_EMAIL,
    subject: 'User message',
    text: `Name: ${inputs.name}\nEmail: ${inputs.email}\nMessage: ${inputs.message}`,
  };
}

// Function to send email
function sendEmail(mailOptions, res) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.COMPANY_EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

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

export default function handler(req, res) {
  // feedback endpoint
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, message } = req.body;
  const inputs = { name, email, message };

  if (!validateInputs(inputs)) {
    res.status(400).json({ error: 'Please fill in all fields' });
    return;
  }

  const mailOptions = createMailOptions(inputs);
  sendEmail(mailOptions, res);
}
