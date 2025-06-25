import React, { useEffect, useState } from "react";
import { ScreenContainer } from "../../components/ScreemComponent";
import { CustomButton } from "../../components/CustomButton";
import { Space, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";
import { getTransfers, TransferItem } from "./service";
import { GenericList } from "../../components/List";
import { ItemContainer, ItemText, Row } from "../../components/List/styles";
import { useAppSelector } from "../../store/store";

import PersonIcon from "../../assets/person-icon.svg";
import MoneyIcon from "../../assets/money-icon.svg";
import CalendarIcon from "../../assets/calendar-icon.svg";

export const TransferList = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [data, setData] = useState<TransferItem[]>([]);
  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      fetchTransfers(token);
    }
  }, [token]);

  const fetchTransfers = async (token: string) => {
    try {
      console.log("Token usado na requisição:", token);
      const response = await getTransfers(token);
      setData(response.transfers);
    } catch (err) {
      console.error("Erro ao buscar transferências:", err);
    }
  };

  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <ScreenContainer>
      <Space value={32} />

      <GenericList
        title="Transferências Recentes"
        data={data}
        renderItem={(item) => (
          <ItemContainer>
            <Row>
              <PersonIcon width={20} height={20} />
              <ItemText>{item.payeer.name}</ItemText>
            </Row>

            <Row>
              <MoneyIcon width={20} height={20} />
              <ItemText>
                {item.value.toFixed(2)} {item.currency}
              </ItemText>
            </Row>

            <Row>
              <CalendarIcon width={20} height={20} />
              <ItemText>{item.date}</ItemText>
            </Row>
          </ItemContainer>
        )}
        keyExtractor={(item, index) => `${item.payeer.document}-${index}`}
      />

      <Space value={32} />
      <CustomButton
        title="Voltar para Home"
        onPress={goToHome}
        backgroundColor="#28a745"
        borderColor="#218838"
        borderRadius={12}
        textColor="#fff"
      />
    </ScreenContainer>
  );
};
