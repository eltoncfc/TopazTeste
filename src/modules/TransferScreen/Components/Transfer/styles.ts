import styled from "styled-components/native";

type SpaceProp = {
  value: number;
};

export const Space = styled.View<SpaceProp>`
  margin-top: ${(props: SpaceProp) => props.value ?? 0}px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 24px;
  text-align: center;
  color: #333;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #444;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
`;
