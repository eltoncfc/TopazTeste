import React from "react";
import { FlatList } from "react-native";
import { Container, ItemContainer, ItemText } from "./styles";

export interface GenericListItem {
  id?: string | number;
  [key: string]: any;
}

interface GenericListProps {
  data: GenericListItem[];
  renderItem: (item: GenericListItem) => React.ReactElement;
  keyExtractor?: (item: GenericListItem, index: number) => string;
  emptyMessage?: string;
}

export const GenericList = ({
  data,
  renderItem,
  keyExtractor,
  emptyMessage = "Nenhum item encontrado.",
}: GenericListProps) => {
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={keyExtractor || ((_, index) => index.toString())}
        renderItem={({ item }) => renderItem(item)}
        ListEmptyComponent={<ItemText>{emptyMessage}</ItemText>}
      />
    </Container>
  );
};
