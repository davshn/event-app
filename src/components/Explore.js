import { StyledTitle, StyledView } from "../generiComponents/GenericStyles";
import Searchbar from "./Searchbar";
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';
import styled from "styled-components/native";

const StyledMap = styled(MapView)`
width:900px;
height:670px;
`;

function Explore() {
  return (
    <>
      <Searchbar />
      <StyledView>
        <StyledMap showsUserLocation loadingEnabled />
      </StyledView>
    </>
  );
}

export default Explore;

const styles = StyleSheet.create({
 map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
