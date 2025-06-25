import styled from "styled-components/native";
type SpaceProp = {
  value: number;
};

export const Space = styled.View<SpaceProp>`
  margin-top: ${(props: SpaceProp) => props.value ?? 0}px;
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 16px;
`;

export const ItemContainer = styled.View`
  padding: 12px;
  border-bottom-width: 1px;
  border-color: #ccc;
`;

export const ItemText = styled.Text`
  font-size: 16px;
  margin-left: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 24px;
  text-align: center;
  color: #333;
`;
