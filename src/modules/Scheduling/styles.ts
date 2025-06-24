import styled from "styled-components/native";

type SpaceProp = {
  value: number;
};

export const Space = styled.View<SpaceProp>`
  margin-top: ${(props) => props.value ?? 0}px;
`;
