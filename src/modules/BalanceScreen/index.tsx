import React from "react";
import { Title, BalanceAmount } from "./styles";
import { ScreenContainer } from "../../components/ScreemComponent";

export const Balance = () => {
  const saldo = 1287.45;

  return (
    <ScreenContainer showGoBack>
      <Title>Saldo Atual</Title>
      <BalanceAmount>R$ {saldo.toFixed(2)}</BalanceAmount>
    </ScreenContainer>
  );
};
