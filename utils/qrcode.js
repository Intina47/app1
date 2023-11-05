import { connectToDatabase } from './database';

const generateQRCodeLink = async () => {
    const qrCodeLink = 'https://afrobeatsdundee.co.uk/membership-qrcode';
    return qrCodeLink;
    };

const createQrcode = async (req, res) => {
    try {
        const { db } = await connectToDatabase();
        const { email } = req.body;
        const existingUser = await db.collection('members').findOne({ email });
        if (existingUser) {
        const qrCodeLink = await generateQRCodeLink();
        await db.collection('members').updateOne({ email }, { $set: { qrCodeLink } });
        return res.status(200).json({ message: 'QRCode generated successfully' });
        }
        return res.status(404).json({ error: 'User not found' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server Error' });
    }
    };
export { createQrcode, generateQRCodeLink };
// Path: pages/api/magicLink.js
