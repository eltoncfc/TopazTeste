import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

type SpaceProp = {
  value: number;
};

export const Space = styled.View<SpaceProp>`
  margin-top: ${(props) => props.value ?? 0}px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  background-color: white;
`;

export const HeaderImage = styled.Image`
  width: ${width * 0.4}px;
  height: ${width * 0.4}px;
  margin-bottom: 16px;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 24px;
  text-align: center;
  color: #333;
`;

export const FormWrapper = styled.View`
  flex: 1;
  width: 100%;
  background-color: white;
`;
