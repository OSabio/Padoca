import React, { useContext, useCallback, useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeArea } from "../../../utility/safe-area.components";
import styled from "styled-components/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { List, Avatar } from "react-native-paper";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { useFocusEffect } from "@react-navigation/native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );

  return (
    <SafeArea>
      <AvatarContainer>
        <Spacer position="top" size="large">
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {!photo && (
              <Avatar.Icon size={180} icon="human" backgroundColor="#33658A" />
            )}
            {photo && (
              <Avatar.Image
                size={180}
                source={{ uri: photo }}
                backgroundColor="33658A"
              />
            )}
          </TouchableOpacity>
        </Spacer>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favoritos"
          description="Veja suas padarias favoritas"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favoritos")}
        />
        <SettingsItem
          title="Inscrições"
          description="Veja as padarias que você se inscreveu"
          left={(props) => (
            <List.Icon {...props} color="black" icon="message" />
          )}
          onPress={() => navigation.navigate("Inscrições")}
        />
        <SettingsItem
          title="Notificações"
          description="Teste de notificação"
          left={(props) => <List.Icon {...props} color="black" icon="bell" />}
          onPress={() => navigation.navigate("Notificações")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
