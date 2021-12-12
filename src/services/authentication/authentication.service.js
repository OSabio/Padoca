import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlNHS0BjUNeUPQRGskZgsSi3yMpm5QNWE",
  authDomain: "padoca-ec877.firebaseapp.com",
  projectId: "padoca-ec877",
  storageBucket: "padoca-ec877.appspot.com",
  messagingSenderId: "603459593851",
  appId: "1:603459593851:web:3425fe79a8aec226cd24de",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
