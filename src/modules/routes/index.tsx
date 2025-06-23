import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../Login";
import { Transfer } from "../TransferScreen";
import { Balance } from "../BalanceScreen";
import { LogoHeader } from "../../components/LogoHeader";

export type RootStackParamList = {
  Login: undefined;
  TransferScreen: undefined;
  BalanceScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type PropsMain = {
  screen: keyof RootStackParamList;
  params?: any;
};

export const MainNavigation = ({ screen, params }: PropsMain) => {
  return (
    <Stack.Navigator
      initialRouteName={screen}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => <LogoHeader />,
        }}
      />

      <Stack.Screen
        name="TransferScreen"
        component={Transfer}
        options={{
          header: () => <LogoHeader showGoBack />,
        }}
      />
      <Stack.Screen
        name="BalanceScreen"
        component={Balance}
        options={{
          header: () => <LogoHeader showGoBack />,
        }}
      />
    </Stack.Navigator>
  );
};
