import React from "react";
import { ScreenContainer } from "../../components/ScreemComponent";
import { TransferForm } from "../../components/Transfer";

export const Transfer = () => {
  const handleSchedule = (
    amount: string,
    recipient: string,
    scheduledDate: Date
  ) => {
    console.log(
      `Transferência de R$ ${amount} para ${recipient}  ${scheduledDate.toLocaleDateString()}`
    );
  };

  return (
    <ScreenContainer showGoBack>
      <TransferForm onSchedule={handleSchedule} />
    </ScreenContainer>
  );
};
