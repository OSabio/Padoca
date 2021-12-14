import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const SubscriptionsContext = createContext();

export const SubscriptionsContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [subscriptions, setSubscriptions] = useState([]);

  const saveSubscriptions = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@subscriptions-${uid}`, jsonValue);
    } catch (e) {
      console.log("erro ao adicionar", e);
    }
  };

  const loadSubscriptions = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@subscriptions-${uid}`);
      if (value !== null) {
        setSubscriptions(JSON.parse(value));
      }
    } catch (e) {
      console.log("erro ao carregar", e);
    }
  };

  const add = (restaurant) => {
    setSubscriptions([...subscriptions, restaurant]);
  };

  const remove = (restaurant) => {
    const newSubscriptions = subscriptions.filter(
      (x) => x.placeId !== restaurant.placeId
    );

    setSubscriptions(newSubscriptions);
  };

  useEffect(() => {
    if (user) {
      loadSubscriptions(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveSubscriptions(subscriptions, user.uid);
    }
  }, [subscriptions, user]);

  return (
    <SubscriptionsContext.Provider
      value={{
        subscriptions,
        addToSubscriptions: add,
        removeFromSubscriptions: remove,
      }}
    >
      {children}
    </SubscriptionsContext.Provider>
  );
};
