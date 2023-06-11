import nodemailer from 'nodemailer';
export default function handler(req, res){
    const {name, email, date, time,guests,specialRequest} = req.body;
    console.log(name, email, date, time,guests, specialRequest);
    //send email to company
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'isaiahntina47@gmail.com',
            pass: 'wvwkjnwjkhewcjmq',
        }
    });
    const mailOptions = {
        from: email,
        to: 'isaiahntina47@gmail.com',
        subject: 'New Reservation',
        text: `
        Name: ${name}
        Email: ${email}
        Date: ${date}
        Time: ${time}
        Guests: ${guests}
        Special Request: ${specialRequest}
        `
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error);
        }else{
            console.log('Email sent: ' + info.response);
        }
    });
    const mailOptions2 = {
        from: '',
        to: email,
        subject: 'Reservation Confirmation',
        text: `
        Dear ${name},
        Thank you for making a reservation with us. We look forward to seeing you on ${date} at ${time}.
        `
    };
    transporter.sendMail(mailOptions2, (error, info) => {
        if(error){
            console.log(error);
        }else{
            console.log('Email sent: ' + info.response);
        }
    });
    
    res.status(200).json({message: 'success'});
}