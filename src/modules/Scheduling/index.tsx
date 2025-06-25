import React, { useState } from "react";
import { ScreenContainer } from "../../components/ScreemComponent";
import { CustomButton } from "../../components/CustomButton";
import { DateText, Space } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";
import { Transfer } from "../TransferScreen/Components/Transfer";
import { useCalendar } from "../../hooks/useCalendar";
import { format } from "date-fns";

import { transferAmount } from "../TransferScreen/service";
import { useAppSelector } from "../../store/store";
import Input from "../../components/CustomInput";

export const Scheduling = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const token = useAppSelector((state) => state.auth.token);

  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("");

  const { CalendarTrigger, openCalendar } = useCalendar(
    selectedDate,
    (date) => {
      setSelectedDate(date);
      setFormattedDate(format(date, "dd/MM/yyyy"));
    }
  );

  const goToHome = () => {
    navigation.navigate("Home");
  };

  const handleSchedule = async () => {
    if (!token) {
      alert("Você precisa estar logado.");
      return;
    }

    if (!amount || !recipient) {
      alert("Preencha todos os campos.");
      return;
    }

    setLoading(true);

    const payload = {
      value: parseFloat(amount),
      currency: "BRL",
      payeerDocument: recipient.replace(/\D/g, ""),
      transferDate: selectedDate.toISOString().split("T")[0],
    };

    try {
      const response = await transferAmount(payload, token);

      if (response?.status === "success") {
        navigation.navigate("UserSuccess");
      } else {
        alert("Erro ao agendar. Verifique os dados.");
      }
    } catch (err) {
      console.error(" Erro ao agendar:", err);
      alert("Erro ao agendar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenContainer>
      <Space value={64} />

      <Transfer
        title={"Agendamento"}
        amount={amount}
        recipient={recipient}
        onChangeAmount={setAmount}
        onChangeRecipient={setRecipient}
      />
      <DateText>{"Data do agendamento"}</DateText>
      <Input value={formattedDate} editable={false} placeholder="DD/MM/AAAA" />

      <Space value={32} />

      <CustomButton
        title="Abrir calendário"
        onPress={openCalendar}
        backgroundColor="#28a745"
        borderColor="#218838"
        borderRadius={12}
        textColor="#fff"
      />

      <CalendarTrigger />

      <Space value={32} />

      <CustomButton
        title={loading ? "Agendando..." : "Agendar transferência"}
        onPress={handleSchedule}
        backgroundColor="#3128a7"
        borderColor="#3128a7"
        borderRadius={12}
        textColor="#fff"
        disabled={loading}
      />

      <Space value={18} />

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
