import styled from "styled-components/native";

export const Wrapper = styled.View`
  padding-top: 24px; /* Distância entre topo do celular e o logo */
`;

export const HeaderContainer = styled.View`
  height: 60px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;

export const GoBackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Placeholder = styled.View`
  width: 24px;
`;
