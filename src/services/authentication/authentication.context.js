import React, { useState, createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

import { loginRequest, registerRequest } from "./authentication.service";
import { auth, db } from "../../../firebase";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isPushReady, setIsPushReady] = useState(false);

  //auth.onAuthStateChanged(() => setIsPushReady(true));

  auth.onIdTokenChanged(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

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
    setIsLoading(true);

    if (password !== repeatedPassword) {
      setError("Erro: Senhas não coincidem");
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

    /* if (isPushReady) {
      setDoc(doc(db, "users", auth.currentUser.uid), {
        email: auth.currentUser.email,
      });
    }*/
  };

  const onLogout = () => {
    setUser(null);
    auth.signOut();
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
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
