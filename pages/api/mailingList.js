import { connectToDatabase } from '../../utils/database';

function createHandler() {
  const handlers = {};

  const handler = async (req, res) => {
    try {
      const method = req.method?.toLowerCase();
      if (method && handlers[method]) {
        await handlers[method](req, res);
      } else {
        res.statusCode = 405;
        res.end('Method Not Allowed');
      }
    } catch (error) {
      console.error(error);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  };

  ['get', 'post', 'put', 'delete'].forEach((method) => {
    handler[method] = (fn) => {
      handlers[method] = fn;
      return handler;
    };
  });

  return handler;
}

const handler = createHandler();

handler.post(async (req, res) => {
  try {
    const { name, email, dob } = req.body;
    //console log
    console.log(`New Subscriber ${JSON.stringify(req.body)}`);

    if (!name || !email || !dob) {
      return res.status(400).json({ error: 'Please fill all the fields' });
    }

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
      dob,
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
