import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SettingsNavigator } from "./settings.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { SubscriptionsContextProvider } from "../../services/subscriptions/subscriptions.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Padarias: "md-restaurant",
  Mapa: "md-map",
  Ajustes: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    headerShown: false,
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <SubscriptionsContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "#7FC6A4",
            }}
          >
            <Tab.Screen name="Padarias" component={RestaurantsNavigator} />
            <Tab.Screen name="Mapa" component={MapScreen} />
            <Tab.Screen name="Ajustes" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </SubscriptionsContextProvider>
  </FavouritesContextProvider>
);
