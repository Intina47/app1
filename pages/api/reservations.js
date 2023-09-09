
import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config();

export default function handler(req, res){
    const {name, email,phonenumber, date, time,guests,specialRequest,reservationType} = req.body;
    // make sure all data has been given by the user
    if (!name || !email || !phonenumber || !date || !time || !guests || !reservationType){
        console.log('Error Please Ensure you fill all the fields');
        return res.status(422).json({error: 'Invalid input'});
    }

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
        Phone Number: ${phonenumber}
        Date: ${date}
        Time: ${time}
        Guests: ${guests}
        Special Request: ${specialRequest}
        `,
    };

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
