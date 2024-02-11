import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../utils/database';
import { generateCode } from '../../utils/codeGenerator.ts';
import { sendEmail } from '../../utils/emailer.ts';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();
    const code = generateCode();
    const ip = req.headers['x-real-ip'] as string || req.socket.remoteAddress as string || req.headers['x-forwarded-for'] as string;

    // Check if a code has already been sent in the last hour
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const recentUser = await db.collection('admin_user_x432fwfwdf42').findOne({ ip, timestamp: { $gte: oneHourAgo } });

    if (recentUser) {
        res.status(200).json({ message: 'A code has already been sent in the last hour' });
        return;
    }

    // If no recent code was found, generate a new code and send it
    const user = await db.collection('admin_user_x432fwfwdf42').findOneAndUpdate(
        { ip },
        { $set: { code, timestamp: new Date() } },
        { upsert: true, returnOriginal: false },
    );

    if (!user.value) {
        res.status(500).json({ message: 'Error saving user'});
        return;
    }

    sendEmail(code);
    res.status(200).json({ messsage: 'Code sent'});
};
