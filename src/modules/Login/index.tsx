// import React, { useState } from "react";
// import {
//   Container,
//   Header,
//   HeaderImage,
//   Content,
//   Title,
//   FormWrapper,
//   Space,
// } from "./styles";
// import Input from "../../components/CustomInput";
// import { CustomButton } from "../../components/CustomButton";
// import { RootStackParamList } from "../routes";
// import { useNavigation } from "@react-navigation/native";
// import type { NativeStackNavigationProp } from "@react-navigation/native-stack"; // <-- IMPORTAÇÃO CORRETA
// import { Logo } from "../../components/Logo";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [Password, setPassword] = useState("");
//   const navigation =
//     useNavigation<NativeStackNavigationProp<RootStackParamList>>();

//   const goToRegister = () => {
//     navigation.navigate("BalanceScreen");
//   };

//   return (
//     <Container>
//       <Header>
//         <Logo />
//       </Header>
//       <Space value={68} />

//       <Content>
//         <Title>Login</Title>

//         <FormWrapper>
//           <Space value={48} />

//           <Input
//             placeholder="E-mail"
//             keyboardType="email-address"
//             autoCapitalize="none"
//             value={email}
//             onChangeText={setEmail}
//           />

//           <Input
//             placeholder="Senha"
//             secureTextEntry
//             value={Password}
//             onChangeText={setPassword}
//           />
//         </FormWrapper>

//         <CustomButton
//           title="Enviar"
//           backgroundColor="#28a745"
//           borderColor="#218838"
//           borderRadius={12}
//           textColor="#fff"
//           onPress={() => goToRegister()}
//         />
//       </Content>
//     </Container>
//   );
// }

import React, { useState } from "react";

import { Title, FormWrapper, Space } from "./styles";
import Input from "../../components/CustomInput";
import { CustomButton } from "../../components/CustomButton";
import { ScreenContainer } from "../../components/ScreemComponent";
import { RootStackParamList } from "../routes";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const goToRegister = () => {
    navigation.navigate("BalanceScreen");
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
        onPress={() => goToRegister()}
        backgroundColor="#28a745"
        borderColor="#218838"
        borderRadius={12}
        textColor="#fff"
      />
    </ScreenContainer>
  );
}
