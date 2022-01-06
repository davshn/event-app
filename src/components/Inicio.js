import { Text } from "react-native"
import {backgroundColor} from "../services/theme.js"
import styled from "styled-components/native"
<<<<<<< HEAD
<<<<<<< HEAD
import data from '../../data'
import { EventCard } from "./EventCard.js"
=======
import ButtonGen from "./ButtonGen.js"
>>>>>>> 168cf48f855a03f966a27a765ee40c94348b21fb
=======
import ButtonGen from "../generiComponents/ButtonGen.js"
>>>>>>> 5afd5c0d995fc8270b1aaa330d85fecd05c42e63

const StyledView = styled.ScrollView`
    background-color: ${backgroundColor};
`

function InicioScreen(){
    return(
        <StyledView>
<<<<<<< HEAD
            {
                data?.map(p => <EventCard title={p.title} image={p.image} location={p.location} price={p.price}/>)
            }
=======
            <Text>
                INICIO
            </Text>
>>>>>>> 168cf48f855a03f966a27a765ee40c94348b21fb
        </StyledView>
    )
}



export default InicioScreen
