import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
