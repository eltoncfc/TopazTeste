import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../Login";
import { Balance } from "../BalanceScreen";
import { LogoHeader } from "../../components/LogoHeader";
import { Home } from "../Home";
import { UserSuccess } from "../UserSuccess";
import { TransferScreen } from "../TransferScreen";
import { Scheduling } from "../Scheduling";
import { TransferList } from "../TransferList";

export type RootStackParamList = {
  Login: undefined;
  TransferScreen: undefined;
  BalanceScreen: undefined;
  Home: undefined;
  UserSuccess: undefined;
  Scheduling: undefined;
  TransferList: undefined;
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
        name="Home"
        component={Home}
        options={{
          header: () => <LogoHeader />,
        }}
      />

      <Stack.Screen
        name="TransferScreen"
        component={TransferScreen}
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

      <Stack.Screen
        name="UserSuccess"
        component={UserSuccess}
        options={{
          header: () => <LogoHeader />,
        }}
      />

      <Stack.Screen
        name="Scheduling"
        component={Scheduling}
        options={{
          header: () => <LogoHeader />,
        }}
      />

      <Stack.Screen
        name="TransferList"
        component={TransferList}
        options={{
          header: () => <LogoHeader showGoBack />,
        }}
      />
    </Stack.Navigator>
  );
};
