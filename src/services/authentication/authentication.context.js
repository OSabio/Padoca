import React, { useState, createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);

    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.code.toString().substr(5));
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
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

    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.code.toString().substr(5));
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
