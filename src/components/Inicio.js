import { Text } from "react-native"
import {backgroundColor} from "../services/theme.js"
import styled from "styled-components/native"
import ButtonGen from "../generiComponents/ButtonGen.js"

const StyledView = styled.ScrollView`
    background-color: ${backgroundColor};
`

function InicioScreen(){
    return(
        <StyledView>
            <Text>
                INICIO
            </Text>
        </StyledView>
    )
}



export default InicioScreen
