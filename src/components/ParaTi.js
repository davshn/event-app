import { Text } from "react-native"
import {backgroundColor} from "../services/theme.js"
import styled from "styled-components/native"

const StyledView = styled.ScrollView`
    background-color: ${backgroundColor};
`

function ParaTiScreen(){
    return(
        <StyledView>
            <Text>
                PARA TI
            </Text>
        </StyledView>
    )
}



export default ParaTiScreen
