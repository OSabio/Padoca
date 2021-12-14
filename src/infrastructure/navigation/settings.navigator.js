import React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";
import { NotificationScreen } from "../../features/settings/screens/notification.screen";
import { SubscriptionsScreen } from "../../features/settings/screens/subsctriptions.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favoritos" component={FavouritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
      <SettingsStack.Screen name="Inscrições" component={SubscriptionsScreen} />
      <SettingsStack.Screen
        name="Notificações"
        component={NotificationScreen}
      />
    </SettingsStack.Navigator>
  );
};
