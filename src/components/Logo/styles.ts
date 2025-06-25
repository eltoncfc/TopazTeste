import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-top: 40px;
`;

export const HeaderImage = styled.Image`
  width: ${width * 0.6}px;
  height: ${width * 0.4}px;
  margin-bottom: 16px;
  margin-right: 22px;
`;
