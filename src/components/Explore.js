import { StyledView } from "../generiComponents/GenericStyles";
import Searchbar from "./Searchbar";
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Circle } from 'react-native-maps';
import { useState,useEffect } from "react";
import styled from "styled-components/native";
import * as Location from 'expo-location';

const StyledMap = styled(MapView)`
width:900px;
height:670px;
`;

function Explore() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  
  return (
    <>
      <Searchbar />
      <StyledView>
        <StyledMap showsUserLocation loadingEnabled
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          region={{
            latitude: location?location.coords.latitude:0,
            longitude: location?location.coords.longitude:0,
            latitudeDelta: 0.0043,
            longitudeDelta: 0.0034,
          }}
        >
          <Marker
            // Reemplazar coordinate con variable auto de location para el usuario
            coordinate={{latitude: 37.7825259, longitude: -122.4351431}}
            title={"Ubicación actual"}
          >
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

