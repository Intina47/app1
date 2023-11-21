// utils/database.js
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10,
});

//cache the reference to the database connection
let cachedDb = null;
export async function connectToDatabase() {
    // If the database connection is cached,
    if (cachedDb){
        // return it from the cache
        return cachedDb;
    }
    try {
      await client.connect();
      const db = client.db();
      console.log('Connected to the database');
      cachedDb = { db, client }; // Cache the database connection
      return cachedDb;
    } catch (err) {
      console.error('Error connecting to the database:', err);
      throw new Error('Database connection error');
    }
  }
