import React from "react";
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: center;
`;

const Input = styled.TextInput`
  border-radius: 15px;
  padding: 10px;
  border: 0.5mm solid rgb(209, 209, 209);
`;

export default function Searchbar() {
  return (
    <Container>
      <Input placeholder="Busca tu evento" />
      <TouchableOpacity>Filter</TouchableOpacity>
    </Container>
  );
}
