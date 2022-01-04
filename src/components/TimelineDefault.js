import { View } from "react-native-web"
import {backgroundColor} from "../services/theme.js"
import styled from "styled-components/native"

const styledView = styled.View`
    background-color: ${backgroundColor};
`

function TlDefaultScreen(){
    return(
        <styledView>
            Hola
        </styledView>
    )
}



export default TlDefaultScreen