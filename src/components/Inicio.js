import { Text } from "react-native"
import {backgroundColor} from "../services/theme.js"
import styled from "styled-components/native"
import data from '../../data'
import { EventCard } from "./EventCard.js"

const StyledView = styled.ScrollView`
    background-color: ${backgroundColor};
`

function InicioScreen(){
    return(
        <StyledView>
            {
                data?.map(p => <EventCard title={p.title} image={p.image} location={p.location} price={p.price}/>)
            }
        </StyledView>
    )
}



export default InicioScreen
