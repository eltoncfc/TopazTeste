import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigation } from "./modules/routes"; // ajuste o caminho se for diferente

export default function App() {
  return (
    <>
      <NavigationContainer>
        <MainNavigation screen="Login" />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
