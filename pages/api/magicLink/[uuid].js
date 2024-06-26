//path: /api/magicLink
import { sendMagicLinkEmail } from '../../../utils/email.js';
import { generateQRCodeLink } from '../../../utils/qrcode.js';

export default async (req, res) => {
    if (req.method === 'POST') {
        try {
            // Get UUID from the request body
            const { uuid } = req.body;
            const qrCodeLink = generateQRCodeLink(uuid);
            // get user's email
            const { email } = req.body;
            // send email with link
            await sendMagicLinkEmail(email, qrCodeLink);
            return res.status(200).json({ message: 'Magic link sent successfully' });
        } catch (error) {
            console.log('Error sending magic Link: ',error);
            return res.status(500).json({ error: 'Internal server Error' });
        }
    } else {
        return res.status(404).json({ error: 'Route not found' });
    }
};
