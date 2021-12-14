import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const NotificationButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  align-self: center;
  z-index: 9;
`;

export const Notification = () => {
  /*const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);*/

  const [isNotify, setIsNotify] = useState(false);

  //const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
  return (
    <NotificationButton
      onPress={() => (!isNotify ? setIsNotify(true) : setIsNotify(false))}
    >
      <Ionicons
        name={isNotify ? "send" : "send-outline"}
        size={24}
        color={isNotify ? "#7FC6A4" : "white"}
      />
    </NotificationButton>
  );
};
