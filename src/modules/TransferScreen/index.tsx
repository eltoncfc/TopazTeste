import React, { useRef } from "react";
import { ScreenContainer } from "../../components/ScreemComponent";
import { TransferForm } from "../../components/Transfer";
import { CustomButton } from "../../components/CustomButton";
import { Space } from "./styles";
import { logout } from "../../utils/storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";

export const Transfer = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSchedule = (
    amount: string,
    recipient: string,
    scheduledDate: Date
  ) => {
    console.log(
      `Transferência de R$ ${amount} para ${recipient} em ${scheduledDate.toLocaleDateString()}`
    );
  };

  return (
    <ScreenContainer showGoBack>
      <Space value={28} />
      <TransferForm onSchedule={handleSchedule} />
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
