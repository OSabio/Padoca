import React, { useContext } from "react";
import styled from "styled-components/native";

import { SubscriptionsContext } from "../../../services/subscriptions/subscriptions.context";
import { SafeArea } from "../../../utility/safe-area.components";
import { Text } from "../../../components/typography/text.component";
import { TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.components";

const NoSubscriptionsArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const SubscriptionsScreen = ({ navigation }) => {
  const { subscriptions } = useContext(SubscriptionsContext);

  return subscriptions.length ? (
    <SafeArea>
      <RestaurantList
        data={subscriptions}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PadariaDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoSubscriptionsArea>
      <Text center>Nenhuma inscrição</Text>
    </NoSubscriptionsArea>
  );
};
