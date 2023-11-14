// Path: pages/api/magicLink.js
import { connectToDatabase } from './database';

const generateQRCodeLink = async (uuid) => {
    // const qrCodeLink = `https://afrobeatsdundee.co.uk/entry-qrCode/?uuid=${uuid}`;
    const qrCodeLink = `https://afrobeatsdundee.co.uk/entry-qrCode/${uuid}`;
    return qrCodeLink;
};

const createQrcode = async (req, res) => {
    try {
        const { db } = await connectToDatabase();
        const { email } = req.body;
        const existingUser = await db.collection('members').findOne({ email });
        if (!existingUser) {
        console.log(`${email} User found`);
        const {uuid} = existingUser;
        const qrCodeLink = await generateQRCodeLink(uuid);
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
