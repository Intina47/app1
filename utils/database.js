import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10,
});

let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    console.log('Using cached database instance');
    return cachedDb;
  }
  try {
    await client.connect();
    const db = client.db();
    console.log('New database instance instantiated');
    cachedDb = { db, client };
    return cachedDb;
  } catch (err) {
    console.error('Error connecting to the database:', err);
    throw new Error('Database connection error');
  }
}
