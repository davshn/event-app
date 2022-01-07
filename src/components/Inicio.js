import { Text ,} from "react-native";
import { backgroundColor } from "../services/theme.js";
import styled from "styled-components/native";
import SearchInput from '../components/Searchbar';
import { EventCards } from "./EventCards.js";

// const StyledView = styled.ScrollView`
//   background-color: ${backgroundColor};
// `;
// aqui es el timeline 
function InicioScreen() {
  return (
    <>
   
        <SearchInput/>
        <EventCards/>
        
        
        </>

        
  );
    
}

export default InicioScreen;
