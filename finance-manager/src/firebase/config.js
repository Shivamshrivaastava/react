import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCBh_liJxvuV8x1qefLSCd1d97NgjPKyI0",
  authDomain: "rct124-4eaa8.firebaseapp.com",
  databaseURL: "https://rct124-4eaa8-default-rtdb.firebaseio.com",
  projectId: "rct124-4eaa8",
  storageBucket: "rct124-4eaa8.firebasestorage.app",
  messagingSenderId: "297554646533",
  appId: "1:297554646533:web:770e8bd69d49ce470d6e6c",
  measurementId: "G-TYSN2WBEQV",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
