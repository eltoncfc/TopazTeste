import React from "react";
import { ScreenContainer } from "../../components/ScreemComponent";
import { BalanceCard } from "../../components/Balance";

export const Balance = () => {
  const bankBalance = 1287.45;

  return (
    <ScreenContainer showGoBack>
      <BalanceCard amount={bankBalance} />
    </ScreenContainer>
  );
};
