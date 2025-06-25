//

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
  Space,
  HeaderColumn,
} from "./styles";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import EyeClosedIcon from "../../assets/eye-closed.svg";
import EyeOpenIcon from "../../assets/eye-open.svg";
import { CustomButton } from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";
import { useAppSelector } from "../../store/store";
import { getBalance } from "./service";
import { logout } from "../../utils/storage";

export const Home = () => {
  const [balance, setBalance] = useState("R$ 3.520,45");
  const [showBalance, setShowBalance] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const userName = useAppSelector((state) => state.auth.userName);

  const token = useAppSelector((state) => state.auth.token);

  const goToSchedule = () => {
    navigation.navigate("Scheduling");
  };
  const goToTransfer = () => {
    navigation.navigate("TransferScreen");
  };
  const goToListTransfer = () => {
    navigation.navigate("TransferList");
  };

  const fetchUserInfo = async () => {
    console.log(" Iniciando busca de dados do usuário e saldo...");

    if (token) {
      try {
        console.log(" Token encontrado:", token);
        const response = await getBalance(token);
        console.log(" Resposta da API de saldo:", response);

        const formattedBalance = `R$ ${response.accountBalance
          .toFixed(2)
          .replace(".", ",")}`;

        setBalance(formattedBalance);
      } catch (err: any) {
        console.error(
          " Erro ao buscar saldo:",
          err?.response?.data || err.message
        );
      }
    } else {
      console.warn(" Token não encontrado.");
    }
  };

  useEffect(() => {
    const now = new Date();
    const formatted = format(now, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
    setCurrentDate(formatted);

    fetchUserInfo();
  }, []);

  return (
    <ScreenContainer>
      <ContentContainer>
        <HeaderColumn>
          <DateText testID="date-text">{currentDate}</DateText>
          <Space value={28} />

          <GreetingText testID="greeting-text">
            {"Olá"}
            <GreetingText testID="username-text" style={{ fontWeight: "bold" }}>
              {userName}
            </GreetingText>
          </GreetingText>
        </HeaderColumn>
        <Space value={48} />
        <BalanceSection>
          <BalanceLabel>Saldo:</BalanceLabel>
          <BalanceValue
            testID="balance-value"
            onPress={() => setShowBalance((prev) => !prev)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            {showBalance ? balance : "••••••"}
          </BalanceValue>
          <EyeButton
            testID="toggle-balance-visibility"
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
          testID="btn-transfer"
          title="Efetuar transferência"
          onPress={() => goToTransfer()}
          backgroundColor="#28a745"
          borderColor="#218838"
          borderRadius={12}
          textColor="#fff"
        />
        <Space value={48} />
        <CustomButton
          testID="btn-schedule"
          title="Agendar transferência"
          onPress={() => goToSchedule()}
          backgroundColor="#28a745"
          borderColor="#218838"
          borderRadius={12}
          textColor="#fff"
        />
        <Space value={48} />
        <CustomButton
          testID="btn-transfer-list"
          title="Lista de transferência"
          onPress={() => goToListTransfer()}
          backgroundColor="#28a745"
          borderColor="#218838"
          borderRadius={12}
          textColor="#fff"
        />
        <Space value={48} />
        <CustomButton
          testID="btn-logout"
          title="Sair"
          onPress={() => logout(navigation)}
          backgroundColor="#28a745"
          borderColor="#218838"
          borderRadius={12}
          textColor="#fff"
        />
      </ContentContainer>
    </ScreenContainer>
  );
};
