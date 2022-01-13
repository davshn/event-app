import { StyledView, StyledMap, MapViewContainer } from "../generiComponents/GenericStyles";
import Searchbar from "./Searchbar";
import { PROVIDER_GOOGLE, Marker, Callout, Circle } from 'react-native-maps';
import { useState,useEffect } from "react";
import styled from "styled-components/native";
import * as Location from 'expo-location';
import { ScrollView } from "react-native";

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
    <MapViewContainer>
      <Searchbar />
      <StyledView>
        <StyledMap showsUserLocation loadingEnabled 
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          region={{
            latitude: location?location.coords.latitude:0,
            longitude: location?location.coords.longitude:0,
            latitudeDelta: 0.00049,
            longitudeDelta: 0.00054,
          }}
        >
          <Marker
            // Reemplazar coordinate con variable auto de location para el usuario
            coordinate={{latitude: location?location.coords.latitude:0, longitude: location?location.coords.longitude:0}}
            title={"Ubicación actual"}
          >
          </Marker>
          <Circle
            center={{latitude: location?location.coords.latitude:0, longitude: location?location.coords.longitude:0}}
            radius={10}
            fillColor={'rgba(200, 300, 200, 05)'}
          />
        </StyledMap>
      </StyledView>
    </MapViewContainer>
  );
}

export default Explore;
