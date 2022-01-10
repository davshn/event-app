import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Input, Container, FilterButton } from "../generiComponents/GenericStyles";

export default function Searchbar() {
  return (
    <Container>
      <Input placeholder="Busca tu evento" />
      <FilterButton>
        <Text>Filter</Text>
      </FilterButton>
    </Container>
  );
}