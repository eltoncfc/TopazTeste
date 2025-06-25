import React, { useState } from "react";
import { ScreenContainer } from "../../components/ScreemComponent";
import { CustomButton } from "../../components/CustomButton";
import { Space, Title } from "./styles";
import { logout } from "../../utils/storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";
import { Transfer } from "./Components/Transfer";
import { transferAmount, getTransferList } from "./service";
import { useAppSelector } from "../../store/store";
import { TransferList } from "../TransferList";

export const TransferScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const token = useAppSelector((state) => state.auth.token);

  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTransfer = async () => {
    if (!token) {
      setError("Você precisa estar logado para transferir.");
      return;
    }

    setError(null);
    setLoading(true);
    const payload = {
      value: parseFloat(amount),
      currency: "BRL",
      payeerDocument: recipient.replace(/\D/g, ""),
      transferDate: new Date().toISOString().split("T")[0],
    };
    try {
      const response = await transferAmount(payload, token);
      goToSuccess();
    } catch (error) {
      console.error("Erro ao transferir:", error);
      setError("Erro ao realizar transferência. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const gotToTransferList = () => {
    navigation.navigate("TransferList");
  };

  const goToSuccess = () => {
    navigation.navigate("UserSuccess");
  };

  return (
    <ScreenContainer showGoBack>
      <Space value={28} />
      <Transfer
        title={"Transferência"}
        amount={amount}
        recipient={recipient}
        onChangeAmount={setAmount}
        onChangeRecipient={setRecipient}
      />
      <Space value={38} />

      <CustomButton
        title="Efetuar Transferência"
        onPress={handleTransfer}
        backgroundColor="#28a745"
        borderColor="#218838"
        borderRadius={12}
        textColor="#fff"
        disabled={loading}
      />

      <Space value={18} />
      <CustomButton
        title="Listar transferências"
        onPress={() => gotToTransferList()}
        backgroundColor="#007bff"
        borderColor="#0056b3"
        borderRadius={12}
        textColor="#fff"
      />

      <Space value={18} />
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
