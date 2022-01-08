import styled from "styled-components/native";

export const ModalContStyled = styled.View`
    align-items:center;
    justify-content:center;
    height: 20%;
    margin: 100% 10%;
    padding: 1%;
    background-color:white;
    elevation: 5;
    border-radius:10px;
`;

export const ModalText = styled.Text`            
    color:red;
    font-size:20px;
    text-align: center;
`;

export const ButtonText = styled.Text`            
    color:purple;
    font-size:15px;
`;

export const ModalButtonStyled = styled.TouchableOpacity`
    background-color:white;
    border-color:red;
    border:2px purple;
    border-radius:10px;
    padding:1%;
    margin:1%;
    elevation: 5;
`;

