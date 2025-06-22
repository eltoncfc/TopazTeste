import styled from "styled-components/native";

type ButtonContainerProps = {
  backgroundColor: string;
  borderColor: string;
  borderRadius: number;
};

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  padding: 16px 76px;
  align-items: center;
  justify-content: center;
`;

type ButtonTextProps = {
  textColor: string;
};

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${({ textColor }) => textColor};
  font-size: 16px;
  font-weight: 500;
`;
