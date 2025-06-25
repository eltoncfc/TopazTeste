import styled from "styled-components/native";

type SpaceProp = {
  value: number;
};

export const Space = styled.View<SpaceProp>`
  margin-top: ${(props) => props.value ?? 0}px;
`;

export const DateText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #444;
`;
