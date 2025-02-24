import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../utils/database';
import { generateCode } from '../../utils/codeGenerator.ts';
import { sendEmail } from '../../utils/emailer.ts';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();
    res.setHeader('Cache-Control', 'no-store');
    const ip = req.headers['x-real-ip'] as string || req.socket.remoteAddress as string || req.headers['x-forwarded-for'] as string;

    const code = generateCode();
    try {
        await sendEmail(code);

        const updatedUser = await db.collection('admin_user_x432fwfwdf42').findOneAndUpdate(
            { ip },
            { $set: { code, codeGenerating: false } },
            { returnOriginal: false, upsert: true },
        );
        if (!updatedUser.value) {
            res.status(500).json({ message: 'Failed to update user' });
            return;
        }
        res.status(200).json({ message: 'Email sent' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send email' });
    }
};
