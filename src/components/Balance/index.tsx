import React from "react";
import { Container, Title, BalanceAmount, Space } from "./styles";

type BalanceCardProps = {
  amount: number;
  spacingTop?: number;
};

export const BalanceCard = ({ amount, spacingTop = 40 }: BalanceCardProps) => {
  return (
    <Container>
      <Space value={spacingTop} />
      <Title>Saldo Atual</Title>
      <BalanceAmount>R$ {amount.toFixed(2)}</BalanceAmount>
    </Container>
  );
};
