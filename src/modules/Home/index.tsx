import React, { useEffect, useState } from "react";
import { ScreenContainer } from "../../components/ScreemComponent";
import {
  ContentContainer,
  GreetingText,
  DateText,
  BalanceSection,
  BalanceLabel,
  BalanceValue,
  EyeButton,
  HeaderRow,
  Space,
} from "./styles";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import EyeClosedIcon from "../../assets/eye-closed.svg";
import EyeOpenIcon from "../../assets/eye-open.svg";
import { CustomButton } from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";

export const Home = () => {
  const [userName, setUserName] = useState("Usuário");
  const [balance, setBalance] = useState("R$ 3.520,45");
  const [showBalance, setShowBalance] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const goToSchedule = () => {
    navigation.navigate("Home");
  };
  const goToTransfer = () => {
    navigation.navigate("TransferScreen");
  };
  const goToListTransfer = () => {
    navigation.navigate("Home");
  };

  useEffect(() => {
    setUserName("Gabrieeel");
    setBalance("R$ 3.520,45");

    const now = new Date();
    const formatted = format(now, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
    setCurrentDate(formatted);
  }, []);

  return (
    <ScreenContainer>
      <ContentContainer>
        <HeaderRow>
          <GreetingText>Olá, {userName}</GreetingText>
          <DateText>{currentDate}</DateText>
        </HeaderRow>
        <Space value={48} />

        <BalanceSection>
          <BalanceLabel>Saldo:</BalanceLabel>
          <BalanceValue>{showBalance ? balance : "••••••"}</BalanceValue>
          <EyeButton
            onPress={() => setShowBalance((prev) => !prev)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            {showBalance ? (
              <EyeOpenIcon width={24} height={24} />
            ) : (
              <EyeClosedIcon width={24} height={24} />
            )}
          </EyeButton>
        </BalanceSection>
        <Space value={68} />
        <CustomButton
          title="Transferência"
          onPress={() => goToTransfer()}
          backgroundColor="#28a745"
          borderColor="#218838"
          borderRadius={12}
          textColor="#fff"
        />
        <Space value={48} />

        <CustomButton
          title="Agendar "
          onPress={() => []}
          backgroundColor="#28a745"
          borderColor="#218838"
          borderRadius={12}
          textColor="#fff"
        />

        <Space value={48} />

        <CustomButton
          title="Lista de transferência"
          onPress={() => []}
          backgroundColor="#28a745"
          borderColor="#218838"
          borderRadius={12}
          textColor="#fff"
        />

        <Space value={48} />

        <CustomButton
          title="Sair"
          onPress={() => []}
          backgroundColor="#28a745"
          borderColor="#218838"
          borderRadius={12}
          textColor="#fff"
        />
      </ContentContainer>
    </ScreenContainer>
  );
};
