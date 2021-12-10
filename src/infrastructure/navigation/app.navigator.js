import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { SafeArea } from "../../utility/safe-area.components";

import { RestaurantsNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Padarias: "md-restaurant",
  Mapa: "md-map",
  Ajustes: "md-settings",
};

const Settings = () => (
  <SafeArea>
    <Text>Ajustes</Text>
  </SafeArea>
);

const Map = () => (
  <SafeArea>
    <Text>Mapa</Text>
  </SafeArea>
);

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
  <NavigationContainer>
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Padarias" component={RestaurantsNavigator} />
      <Tab.Screen name="Mapa" component={Map} />
      <Tab.Screen name="Ajustes" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
