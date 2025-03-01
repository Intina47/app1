import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../utils/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();
    if (db === null) {
        res.status(500).json({ message: 'Failed to connect to database' });
        return;
    }
    console.log('Connected to database');

    const { code } = req.body;
    const ip = req.headers['x-real-ip'] as string || req.socket.remoteAddress as string || req.headers['x-forwarded-for'] as string;
    const user = await db.collection('admin_user_x432fwfwdf42').findOne({ ip });

    if (user.code === code) {
        const sessionExpiry = new Date().getTime() + 3600000; // 1 hour
        await db.collection('admin_user_x432fwfwdf42').updateOne({ ip }, { $set: { sessionExpiry } });
        res.status(200).json({ accessGranted: true, message: 'Code verified' });
    } else {
        res.status(200).json({ accessGranted: false, message: 'Invalid code' });
    }
};
