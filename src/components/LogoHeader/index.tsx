import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderContainer, Placeholder, GoBackButton, Wrapper } from "./styles";
import { Logo } from "../Logo";

type LogoHeaderProps = {
  showGoBack?: boolean;
};

export const LogoHeader = ({ showGoBack = false }: LogoHeaderProps) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView>
      <Wrapper>
        <HeaderContainer>
          {showGoBack ? (
            <GoBackButton onPress={handleGoBack}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </GoBackButton>
          ) : (
            <Placeholder />
          )}

          <Logo />
          <Placeholder />
        </HeaderContainer>
      </Wrapper>
    </SafeAreaView>
  );
};
