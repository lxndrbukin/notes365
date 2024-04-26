import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "note-taker-bff39.firebaseapp.com",
  projectId: "note-taker-bff39",
  storageBucket: "note-taker-bff39.appspot.com",
  messagingSenderId: "140162965206",
  appId: "1:140162965206:web:c5f06ed52f5574ce7b3377",
  measurementId: "G-694K8ZHLHL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);