import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../utils/database';
import { generateCode } from '../../utils/codeGenerator.ts';
import { sendEmail } from '../../utils/emailer.ts';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();
    res.setHeader('Cache-Control', 'no-store');
    const ip = req.headers['x-real-ip'] as string || req.socket.remoteAddress as string || req.headers['x-forwarded-for'] as string;

    // Generate a new code and send it
    const code = generateCode();
    try {
    sendEmail(code);
    } catch (error) {
        res.status(500).json({ message: 'Failed to send email' });
        return;
    }

    // Update the user document with the new code and set the codeGenerating flag to false
    const updatedUser = await db.collection('admin_user_x432fwfwdf42').findOneAndUpdate(
        { ip },
        { $set: { code, codeGenerating: false } },
        { returnOriginal: false },
    );

    if (!updatedUser.value) {
        res.status(500).json({ message: 'Error saving user'});
        return;
    }

    res.status(200).json({ messsage: 'Code sent'});
};
