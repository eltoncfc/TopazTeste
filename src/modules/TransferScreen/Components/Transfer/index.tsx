import React from "react";
import { Title, Label, Input, Space } from "./styles";
import { formatCPF } from "../../../../utils/format";

type Props = {
  amount: string;
  recipient: string;
  title: string;
  onChangeAmount: (value: string) => void;
  onChangeRecipient: (value: string) => void;
};

export const Transfer = ({
  amount,
  recipient,
  onChangeAmount,
  onChangeRecipient,
  title,
}: Props) => {
  return (
    <>
      <Title>{title}</Title>

      <Label></Label>
      <Input
        value={recipient}
        onChangeText={(text: string) => onChangeRecipient(formatCPF(text))}
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
