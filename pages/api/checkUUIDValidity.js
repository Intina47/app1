// path: /pages/api/checkUUIDValidity.js
import { connectToDatabase } from '../../utils/database';

export default async function handler(req, res) {
    const { uuid } = req.query;

    if (!uuid) {
        return res.status(400).json({ isValid: false });
    }

    try {
        const { db } = await connectToDatabase();
        const existingUser = await db.collection('members').findOne({ uuid });

        if (existingUser) {
            return res.status(200).json({ isValid: true });
        }

        return res.status(200).json({ isValid: false });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ isValid: false });
    }
}
