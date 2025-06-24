import React from "react";
import { Title, Label, Input, Space } from "./styles";

type Props = {
  amount: string;
  recipient: string;
  onChangeAmount: (value: string) => void;
  onChangeRecipient: (value: string) => void;
};

export const Transfer = ({
  amount,
  recipient,
  onChangeAmount,
  onChangeRecipient,
}: Props) => {
  const formatCPF = (value: string) => {
    const numeric = value.replace(/\D/g, "").slice(0, 11);
    return numeric
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  return (
    <>
      <Title>Nova transferência</Title>

      <Label>CPF</Label>
      <Input
        value={recipient}
        onChangeText={(text) => onChangeRecipient(formatCPF(text))}
        placeholder="CPF"
        keyboardType="numeric"
      />

      <Label>Valor (R$)</Label>
      <Input
        value={amount}
        onChangeText={onChangeAmount}
        keyboardType="numeric"
        placeholder="0.00"
      />

      <Space value={12} />
    </>
  );
};
