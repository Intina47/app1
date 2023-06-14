
import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config();

export default function handler(req, res){
    const {name, email, date, time,guests,specialRequest,reservationType} = req.body;
    console.log(name, email, date, time,guests, specialRequest,reservationType);

    //send email to company
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.COMPANY_EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.COMPANY_EMAIL,
        to: process.env.COMPANY_EMAIL,
        subject: 'New Reservation',
        text: `
        RESERVATION TYPE: ${reservationType}
        Name: ${name}
        Email: ${email}
        Date: ${date}
        Time: ${time}
        Guests: ${guests}
        Special Request: ${specialRequest}
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            console.log(error);
        } else {
            console.log(`Email sent: ${info.response}`);
        }
    });

    const mailOptions2 = {
        from: process.env.COMPANY_EMAIL,
        to: email,
        subject: `${reservationType} Reservation Confirmation`,
        text: `Dear ${name},\nThank you for making a reservation with us. We look forward to seeing you on ${date} at ${time}.`,
    };

    transporter.sendMail(mailOptions2, (error, info) => {
        if (error){
            console.log(error);
        } else {
            console.log(`Email sent: ${info.response}`);
        }
    });

    res.status(200).json({message: 'success'});
}
