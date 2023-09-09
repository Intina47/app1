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
    console.log('TO: ', toEmail);
    const link = await linkPromise;
    console.log('LINK: ', link);
    const html = `
    <div>
      <h1>Generate your Entry Pass</h1>
      <p>Click the Link below to generate your pass</p>
      <p><a href="${link}">Generate Pass</a></p>
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
