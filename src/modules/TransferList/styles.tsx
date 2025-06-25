import styled from "styled-components/native";

type SpaceProp = {
  value: number;
};

export const Space = styled.View<SpaceProp>`
  margin-top: ${(props: SpaceProp) => props.value ?? 0}px;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  background-color: white;
`;

export const Label = styled.Text`
  font-size: 16px;
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

export const DateInput = styled.TouchableOpacity`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 24px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #007bff;
  border-radius: 8px;
  padding: 14px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 24px;
`;
