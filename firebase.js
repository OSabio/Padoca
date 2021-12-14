import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlNHS0BjUNeUPQRGskZgsSi3yMpm5QNWE",
  authDomain: "padoca-ec877.firebaseapp.com",
  databaseURL: "padoca-ec877.firebaseapp.com",
  projectId: "padoca-ec877",
  storageBucket: "padoca-ec877.appspot.com",
  messagingSenderId: "603459593851",
  appId: "1:603459593851:web:3425fe79a8aec226cd24de",
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);
