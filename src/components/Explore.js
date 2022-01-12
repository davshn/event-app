import { StyledTitle, StyledView } from "../generiComponents/GenericStyles";
import Searchbar from "./Searchbar";
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Circle } from 'react-native-maps';
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
            latitudeDelta: 0.09,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            // Reemplazar coordinate con variable auto de location para el usuario
            coordinate={{latitude: 37.7825259, longitude: -122.4351431}}
            title={"Ubicación actual"}
          >
            <Callout>
              <Text>Detalles del evento y link para pagina detalle</Text>
              <image source={require('../../assets/icon1.png')} />
            </Callout>
          </Marker>
          <Circle
            center={{latitude: 37.7825259, longitude: -122.4351431}}
            radius={1000}
            fillColor={'rgba(200, 300, 200, 05)'}
          />
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
