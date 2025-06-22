import React, { useState } from "react";
import {
  Container,
  Title,
  Label,
  Input,
  Button,
  ButtonText,
  DateInput,
  Header,
} from "./styles";
// import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import { Logo } from "../../components/Logo";

export const Transfer = () => {
  const [valor, setValor] = useState("");
  const [destinatario, setDestinatario] = useState("");
  const [dataAgendada, setDataAgendada] = useState(new Date());
  const [mostrarPicker, setMostrarPicker] = useState(false);

  const handleAgendar = () => {
    console.log(
      `Transferência de R$ ${valor} para ${destinatario} em ${dataAgendada.toLocaleDateString()}`
    );
  };

  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <Title>Nova Transferência</Title>

      <Label>Destinatário</Label>
      <Input
        value={destinatario}
        onChangeText={setDestinatario}
        placeholder="Nome ou CPF"
      />

      <Label>Valor (R$)</Label>
      <Input
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
        placeholder="0.00"
      />

      <Label>Data da transferência</Label>
      <DateInput onPress={() => setMostrarPicker(true)}>
        <ButtonText>{dataAgendada.toLocaleDateString()}</ButtonText>
      </DateInput>

      {/* {mostrarPicker && (
        <DateTimePicker
          value={dataAgendada}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "calendar"}
          onChange={(_, date) => {
            setMostrarPicker(false);
            if (date) setDataAgendada(date);
          }}
        />
      )} */}

      <Button onPress={handleAgendar}>
        <ButtonText>Agendar Transferência</ButtonText>
      </Button>
    </Container>
  );
};
