import { initializeApp } from 'firebase/app';
import dotenv from 'dotenv';
import { getStorage } from 'firebase/storage';

dotenv.config();

const firebaseConfig = {
 apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
 authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
 projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
 storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
 messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
 appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
 measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (!app) {
 throw new Error('Firebase app not initialized');
}

console.log('Firebase app initialized');

// try connecting to our storage bucket
const storage = getStorage(app);
if (!storage) {
 throw new Error('Failed to connect to storage bucket');
}

console.log('Connected to storage bucket');

export { app };

