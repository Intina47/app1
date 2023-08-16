// utils/database.js
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function connectToDatabase() {
    try {
      await client.connect();
      const db = client.db();
      console.log('Connected to the database');
      return { db, client }; // Return both the db and client
    } catch (err) {
      console.error('Error connecting to the database:', err);
      throw err;
    }
  }
