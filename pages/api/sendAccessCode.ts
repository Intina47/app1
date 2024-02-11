import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../utils/database';
import { generateCode } from '../../utils/codeGenerator.ts';
import { sendEmail } from '../../utils/emailer.ts';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();
    const ip = req.headers['x-real-ip'] as string || req.socket.remoteAddress as string || req.headers['x-forwarded-for'] as string;

    // Check if a code is currently being generated for this IP
    const user = await db.collection('admin_user_x432fwfwdf42').findOne({ ip });

    if (user && user.codeGenerating) {
        res.status(409).json({ message: 'A code is currently being generated, please try again later' });
        return;
    }

    // If no code is being generated, set the codeGenerating flag to true
    await db.collection('admin_user_x432fwfwdf42').findOneAndUpdate(
        { ip },
        { $set: { codeGenerating: true } },
        { upsert: true },
    );

    // Generate a new code and send it
    const code = generateCode();
    sendEmail(code);

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
