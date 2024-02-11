import { validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import { connectToDatabase } from '../../utils/database';
import { createHandler } from '../../utils/handler';

const handler = createHandler();

handler.post(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const events = req.body; // Expect an array of events

    const { db } = await connectToDatabase();

    const collection = db.collection('events');

    // Map each event to an object with an id
    const eventDetails = events.map((event) => ({
        ...event,
        id: uuidv4(),
    }));

    // Insert all event details into the database
    await collection.insertMany(eventDetails);

    res.status(201).json({ message: 'Events uploaded successfully' });
});

export default handler;
