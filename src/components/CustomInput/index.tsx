import React from "react";
import { TextInputProps } from "react-native";
import { Container, StyledInput } from "./styles";

interface InputProps extends TextInputProps {}

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <Container>
      <StyledInput {...rest} />
    </Container>
  );
};

export default Input;
