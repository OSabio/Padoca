import React from "react";

import { Spacer } from "../../../components/spacer/spacer.component";

import { Button } from "react-native-paper";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Padoca</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Registrar
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
