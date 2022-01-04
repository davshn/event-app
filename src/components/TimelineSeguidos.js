import { View } from "react-native-web"
import {backgroundColor} from "../services/theme.js"
import styled from "styled-components/native"

const StyledView = styled.View`
    background-color: ${backgroundColor};
`

function TlSeguidosScreen(){
    return(
        <StyledView>
            SEGUIDOS
        </StyledView>
    )
}



export default TlSeguidosScreen