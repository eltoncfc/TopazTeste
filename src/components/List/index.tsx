import React from "react";
import { FlatList } from "react-native";
import { Container, ItemContainer, ItemText, Space, Title } from "./styles";

export interface GenericListItem {
  id?: string | number;
  [key: string]: any;
}

interface GenericListProps {
  data: GenericListItem[];
  renderItem: (item: GenericListItem) => React.ReactElement;
  keyExtractor?: (item: GenericListItem, index: number) => string;
  emptyMessage?: string;
  title?: string;
}

export const GenericList = ({
  data,
  renderItem,
  keyExtractor,
  emptyMessage = "Nenhum item encontrado.",
  title,
}: GenericListProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Space value={20} />

      <FlatList
        data={data}
        keyExtractor={keyExtractor || ((_, index) => index.toString())}
        renderItem={({ item }) => renderItem(item)}
        ListEmptyComponent={<ItemText>{emptyMessage}</ItemText>}
      />
    </Container>
  );
};
