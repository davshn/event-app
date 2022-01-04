import { Text } from "react-native-web"
import {backgroundColor} from "../services/theme.js"
import styled from "styled-components/native"

const StyledView = styled.View`
    background-color: ${backgroundColor};
`

function TlSeguidosScreen(){
    return(
        <StyledView>
            <Text>
            SEGUIDOS
            </Text>
        </StyledView>
    )
}



export default TlSeguidosScreen
