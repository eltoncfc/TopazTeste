import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Title, FormWrapper, Space } from "./styles";
import Input from "../../components/CustomInput";
import { CustomButton } from "../../components/CustomButton";
import { ScreenContainer } from "../../components/ScreemComponent";

import { useAppDispatch } from "../../store/store";
import { setToken, setUserName } from "../../store/modules/auth/authSlice";

import { RootStackParamList } from "../routes";
import { login } from "./service";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const goToHome = () => {
    navigation.navigate("Home");
  };

  const handleLogin = async () => {
    try {
      const res = await login(email, password);

      dispatch(setToken(res.token));
      dispatch(setUserName(res.user.name));

      goToHome();
    } catch (err: any) {
      Alert.alert("Erro ao entrar", "E-mail ou senha incorretos.");
    }
  };

  return (
    <ScreenContainer>
      <Title>Login</Title>

      <FormWrapper>
        <Space value={88} />

        <Input
          testID="email-input"
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          testID="password-input"
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </FormWrapper>

      <Space value={48} />

      <CustomButton
        testID="login-button"
        title="Entrar"
        onPress={handleLogin}
        backgroundColor="#28a745"
        borderColor="#218838"
        borderRadius={12}
        textColor="#fff"
      />
    </ScreenContainer>
  );
}
