import styled from "styled-components/native";

type SpaceProp = {
  value: number;
};

export const Space = styled.View<SpaceProp>`
  margin-top: ${(props: { value: any }) => props.value ?? 0}px;
`;

export const ContentContainer = styled.View`
  width: 100%;
  padding: 24px;
`;

export const HeaderColumn = styled.View`
  width: 100%;
  flex-direction: column;
  gap: 4px;
`;

export const DateText = styled.Text`
  font-size: 16px;
  color: #666;
  align-self: flex-end; /* Alinha à direita */
`;

export const GreetingText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  align-self: flex-start; /* Alinha à esquerda */
`;

export const BalanceSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
`;

export const BalanceLabel = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #333;
`;

export const BalanceValue = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #333;
  flex: 1;
  text-align: center;
`;

export const EyeButton = styled.TouchableOpacity`
  width: 32px;
  align-items: center;
  justify-content: center;
`;
