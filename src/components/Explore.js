import { StyledTitle, StyledView } from "../generiComponents/GenericStyles";
import Searchbar from "./Searchbar";
import { MapView, PROVIDER_GOOGLE } from 'react-native-maps';
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
        <StyledMap showsUserLocation loadingEnabled
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
       }}
       >
        </StyledMap>
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
