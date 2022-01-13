import { StyledView, StyledMap, MapViewContainer } from "../generiComponents/GenericStyles";
import Searchbar from "./Searchbar";
import { PROVIDER_GOOGLE, Marker, Callout, Circle } from 'react-native-maps';
import { useState,useEffect } from "react";
import styled from "styled-components/native";
import * as Location from 'expo-location';
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { MapStyled } from '../generiComponents/MapsStyles';
import { useNavigation } from "@react-navigation/native";


function Explore() {
  const events = useSelector(state => state.getEventsReducer.events);
  const [location, setLocation] = useState(null);
  const navigation = useNavigation();

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
    <MapViewContainer>
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
        >
          {events?.map((event)=><Marker key={event.id}
            coordinate={{latitude: parseFloat(event.latitude), longitude: parseFloat(event.longitude)}}
            title={event.name}>
            <Callout onPress={() => navigation.navigate("Detail", { item: event })}></Callout>
          </Marker>)}
        
        </MapStyled>
      </StyledView>
    </MapViewContainer>
  );
}

export default Explore;
