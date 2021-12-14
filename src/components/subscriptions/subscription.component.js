import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { SubscriptionsContext } from "../../services/subscriptions/subscriptions.context";

const SubscribeButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  left: 25px;
  z-index: 9;
`;

export const Subscription = ({ restaurant }) => {
  const { subscriptions, addToSubscriptions, removeFromSubscriptions } =
    useContext(SubscriptionsContext);

  const isSubscribed = subscriptions.find(
    (r) => r.placeId === restaurant.placeId
  );

  return (
    <SubscribeButton
      onPress={() =>
        !isSubscribed
          ? addToSubscriptions(restaurant)
          : removeFromSubscriptions(restaurant)
      }
    >
      <Ionicons
        name={isSubscribed ? "notifications" : "notifications-outline"}
        size={26}
        color={isSubscribed ? "#2182BD" : "white"}
      />
    </SubscribeButton>
  );
};
