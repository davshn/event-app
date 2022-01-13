import styled from "styled-components/native";
import MapView from 'react-native-maps';

export const MapStyled = styled(MapView)`
    width:320px;
    height:600px;
`;

export const MapContainertStyled = styled.View`
    margin: 10%;
    padding: 1%;
    background-color:white;
    elevation: 5;
    border-radius:10px;
`;