import React from "react";
import { ScreenContainer } from "../../components/ScreemComponent";
import { CustomButton } from "../../components/CustomButton";
import { Space } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";
import { StatusScreen } from "../../components/StatusScreen";
import PositiveIcon from "../../assets/positive-icon.svg";

export const UserSuccess = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <ScreenContainer>
      <Space value={128} />

      <StatusScreen
        message="Transferência concluída com sucesso!"
        SvgImage={PositiveIcon}
      />
      <Space value={128} />
      <CustomButton
        title="Voltar para Home"
        onPress={() => goToHome()}
        backgroundColor="#28a745"
        borderColor="#218838"
        borderRadius={12}
        textColor="#fff"
      />
    </ScreenContainer>
  );
};
