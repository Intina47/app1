import nodemailer from 'nodemailer';
import { config } from 'dotenv';

const xss = require('xss');

config();

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
        subject: `Reservation request from ${inputs.name}`,
        text: `
        RESERVATION TYPE: ${inputs.reservationType}
        Name: ${inputs.name}
        Email: ${inputs.email}
        Phone Number: ${inputs.phonenumber}
        Date: ${inputs.date}
        Time: ${inputs.time}
        Guests: ${inputs.guests}
        Special Request: ${inputs.specialRequest}
        `,
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
        if (error){
            console.log(`Error sending reservation email: ${error}`);
            res.status(500).json({error: 'Error sending reservation email'});
        } else {
            console.log(`Email sent: ${info.response}`);
            res.status(200).json({message: 'Reservation sent successfully'});
        }
    });
}

export default function handler(req, res){
    const {name, email, phonenumber, date, time, guests, specialRequest, reservationType} = req.body;

    const inputs = {name, email, phonenumber, date, time, guests, specialRequest, reservationType};

    if (!validateInputs(inputs)) {
        console.log('Error Please Ensure you fill all the fields');
        return res.status(422).json({error: 'Invalid input'});
    }

    const mailOptions = createMailOptions(inputs);
    sendEmail(mailOptions, res);
}
