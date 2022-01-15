import styled from "styled-components/native";
import { backgroundColor, TextColor } from "../services/theme"

export const ModalContStyled = styled.View`
    align-items:center;
    justify-content:space-evenly;
    height: 20%;
    margin: 10%;
    margin-top: 70%;
    padding: 1%;
    background-color:${backgroundColor};
    border-radius:10px;
    border: 1.5px solid #776BC7;
`;

export const ModalText = styled.Text`            
    color: ${TextColor};
    font-size:20px;
    text-align: center;
`;

export const ButtonText = styled.Text`            
    color: ${TextColor};
    font-size: 15px;
    padding: 2%;
`;

export const ModalButtonStyled = styled.TouchableOpacity`
    background-color:${backgroundColor};
    border-color:red;
    border:2px #776BC7;
    border-radius:10px;
    padding:1%;
    margin:1%;
    elevation: 5;
`;

