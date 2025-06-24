import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigation } from "./modules/routes";

import { Provider, useDispatch } from "react-redux";
import { store } from "./store/store";
import { setToken } from "./store/modules/auth/authSlice";

const AppInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fakeToken = "fake-jwt-token";
    dispatch(setToken(fakeToken));
    console.log(" Token de teste setado no Redux???", fakeToken);
  }, []);

  return <MainNavigation screen="Login" />;
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppInitializer />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
