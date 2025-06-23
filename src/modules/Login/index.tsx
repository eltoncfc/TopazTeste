// import React, { useState } from "react";

import React, { useState } from "react";

import { Title, FormWrapper, Space } from "./styles";
import Input from "../../components/CustomInput";
import { CustomButton } from "../../components/CustomButton";
import { RootStackParamList } from "../routes";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenContainer } from "../../components/ScreemComponent";
import { login } from "./service";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const goTo = () => {
    navigation.navigate("TransferScreen");
  };

  const handleLogin = async () => {
    try {
      const res = await login(email, password);

      console.log("Login ok:", res);

      navigation.navigate("TransferScreen");
    } catch (err: any) {
      console.warn("Falha no login:", err.message);
    }
  };

  return (
    <ScreenContainer>
      <Title>Login</Title>

      <FormWrapper>
        <Space value={48} />

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </FormWrapper>

      <CustomButton
        title="Enviar"
        onPress={() => handleLogin()}
        backgroundColor="#28a745"
        borderColor="#218838"
        borderRadius={12}
        textColor="#fff"
      />
    </ScreenContainer>
  );
}
