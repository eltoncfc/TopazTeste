import React, { useState } from "react";
import { Title, Label, Input, Button, ButtonText, DateInput } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import { CustomButton } from "../CustomButton";

type TransferFormProps = {
  onSchedule: (amount: string, recipient: string, scheduledDate: Date) => void;
};

export const TransferForm = ({ onSchedule }: TransferFormProps) => {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [scheduledDate, setScheduledDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const formatCPF = (value: string) => {
    const numeric = value.replace(/\D/g, "").slice(0, 11);

    return numeric
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  const handleSchedule = () => {
    onSchedule(amount, recipient, scheduledDate);
  };

  return (
    <>
      <Title>Nova transferência</Title>

      <Label>CPF</Label>
      <Input
        value={recipient}
        onChangeText={(text: string) => setRecipient(formatCPF(text))}
        placeholder="CPF"
        keyboardType="numeric"
      />

      <Label>Valor (R$)</Label>
      <Input
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        placeholder="0.00"
      />

      <Label>Data da transferência</Label>
      <DateInput onPress={() => setShowPicker(true)}>
        <ButtonText>{scheduledDate.toLocaleDateString()}</ButtonText>
      </DateInput>

      {showPicker && (
        <DateTimePicker
          value={scheduledDate}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "calendar"}
          onChange={(_, date) => {
            setShowPicker(false);
            if (date) setScheduledDate(date);
          }}
        />
      )}

      <CustomButton
        title="Agendamento"
        onPress={() => handleSchedule()}
        backgroundColor="#28a745"
        borderColor="#218838"
        borderRadius={12}
        textColor="#fff"
      />
    </>
  );
};
