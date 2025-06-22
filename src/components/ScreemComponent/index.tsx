// src/components/ScreenContainer/index.tsx

import React, { ReactNode } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Container, Content } from "./styles";
import { LogoHeader } from "../LogoHeader";

type ScreenContainerProps = {
  children: ReactNode;
  showGoBack?: boolean;
};

export const ScreenContainer = ({
  children,
  showGoBack = false,
}: ScreenContainerProps) => {
  return (
    <Container>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <LogoHeader showGoBack={showGoBack} />
        <Content>{children}</Content>
      </KeyboardAvoidingView>
    </Container>
  );
};
