import styled from "styled-components/native";

type SpaceProp = {
  value: number;
};

export const Space = styled.View<SpaceProp>`
  margin-top: ${(props) => props.value ?? 0}px;
`;

export const Container = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 24px;
  color: #333;
`;

export const BalanceAmount = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-top: 8px;
  color: #2e7d32;
`;
