import { Text } from "react-native"
import {backgroundColor} from "../services/theme.js"
import styled from "styled-components/native"

const StyledView = styled.ScrollView`
    background-color: ${backgroundColor};
`

function ExplorarScreen(){
    return(
        <StyledView>
            <Text>
                EXPLORAR
            </Text>
        </StyledView>
    )
}



export default ExplorarScreen
