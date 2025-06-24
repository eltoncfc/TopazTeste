import React from "react";
import { ScreenContainer } from "../../components/ScreemComponent";
import { CustomButton } from "../../components/CustomButton";
import { Space } from "./styles";
import { logout } from "../../utils/storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";

export const UserSuccess = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenContainer showGoBack>
      <Space value={28} />
      <Space value={38} />
      <CustomButton
        title="Sair"
        onPress={() => logout(navigation)}
        backgroundColor="#28a745"
        borderColor="#218838"
        borderRadius={12}
        textColor="#fff"
      />
    </ScreenContainer>
  );
};
