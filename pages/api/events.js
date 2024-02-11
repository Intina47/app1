import { connectToDatabase } from '../../utils/database';
import { createHandler } from '../../utils/handler';

const handler = createHandler();

handler.get(async (req, res) => {
    const { db } = await connectToDatabase();

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayString = today.toISOString().split('T')[0];
    const events = await db
        .collection('events')
        .find({ eventDate: { $gte: todayString } })
        .sort({ eventDate: 1 })
        .toArray();

    res.status(200).json(events);
});

export default handler;
