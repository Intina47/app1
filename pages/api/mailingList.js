// import { validationResult } from 'express-validator';
import { connectToDatabase } from '../../utils/database';
import { createHandler } from '../../utils/handler';

const handler = createHandler();

handler.post(async (req, res) => {
  try {
    const { name, email, dob } = req.body;
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ error: errors.array() });
    //   }
    if (!name || !email || !dob) {
      return res.status(400).json({ error: 'Please fill all the fields' });
    }
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      console.log('invalid Email');
       return res.status(400).json({ error: 'Invalid-email-format' });
     }
    // Convert dob string to Date object
    const dobDate = new Date(dob);
    // const formattedDate = dobDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    // console.log(formattedDate); // Output: July 1, 2000
    const { db } = await connectToDatabase();
    // Check for existing user with same email address in database
    const existingUser = await db.collection('subscribers').findOne({ email });
    if (existingUser) {
        return res.status(201).json({ message: 'Subscriber added successfully' });
    }
    const collection = db.collection('subscribers');

    const subscriber = {
      name,
      email,
      dob: dobDate,
      timestamp: new Date(),
    };
    await collection.insertOne(subscriber);
    console.log(`New Subscriber Added ${JSON.stringify(subscriber)}`);
    return res.status(201).json({ message: 'Subscriber added successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server Error' });
  }
});

export default handler;
