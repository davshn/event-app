import { View } from "react-native-web"
import {backgroundColor} from "../services/theme.js"
import styled from "styled-components/native"

const StyledView = styled.View`
    background-color: ${backgroundColor};
`

function TlDefaultScreen(){
    return(
        <StyledView>
            Hola
        </StyledView>
    )
}



export default TlDefaultScreen