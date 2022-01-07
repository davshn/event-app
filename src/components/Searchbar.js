import React from "react";
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,Text
} from "react-native";
import styled from "styled-components/native";





export default function Searchbar() {
  return (
    <Container>
      <Input placeholder="Busca tu evento" />
      <TouchableOpacity style={styles.button}>
        <Text>Filter</Text>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
button:{
  
}



})


const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding: 15px;
  justify-content: center;
`;

const Input = styled.TextInput`
  border-radius: 15px;
  padding: 10px;
  border: 0.5mm solid rgb(209, 209, 209);
  position: absolute;
  width: 200px;
  height: 40px;
  left: 10px;
  border: 1px solid #bababa;

  
  top: 0px;
`;





