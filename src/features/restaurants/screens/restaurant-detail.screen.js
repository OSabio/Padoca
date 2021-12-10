import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.components";

import { SafeArea } from "../../../utility/safe-area.components";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Café da Manhã"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Omelete" />
          <List.Item title="Misto Quente" />
          <List.Item title="Bauru" />
          <List.Item title="Café Clássico" />
        </List.Accordion>
        <List.Accordion
          title="Almoço"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Salmão com Alcaparras" />
          <List.Item title="Burguer com Fritas" />
          <List.Item title="Vegano" />
        </List.Accordion>
        <List.Accordion
          title="Jantar"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Pizza Especial" />
          <List.Item title="Risoto com Fillet Mignon" />
          <List.Item title="Porção de Frios" />
        </List.Accordion>
        <List.Accordion
          title="Bebidas"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Refrigerante" />
          <List.Item title="Cerveja" />
          <List.Item title="Vinho" />
          <List.Item title="Suco" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
