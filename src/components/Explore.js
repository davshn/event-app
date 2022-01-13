import { StyledView } from "../generiComponents/GenericStyles";
import Searchbar from "./Searchbar";
import { PROVIDER_GOOGLE, Marker, Callout, Circle } from 'react-native-maps';
import { useState,useEffect } from "react";
import { MapStyled } from '../generiComponents/MapsStyles';
import * as Location from 'expo-location';


function Explore() {
  const [location, setLocation] = useState(null);
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
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
        <MapStyled showsUserLocation loadingEnabled onPress={(e)=>console.log(e.nativeEvent.coordinate) }
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          region={{
            latitude: location?location.coords.latitude:0,
            longitude: location?location.coords.longitude:0,
            latitudeDelta: 0.00049,
            longitudeDelta: 0.00054,
          }}
        />
      </StyledView>
    </>
  );
}

export default Explore;
