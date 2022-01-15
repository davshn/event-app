// import { StyledView, StyledMap, MapViewContainer } from "../generiComponents/GenericStyles";
import Searchbar from "./Searchbar";
import { PROVIDER_GOOGLE, Marker, Callout, Circle } from 'react-native-maps';
import { useState,useEffect } from "react";
import styled from "styled-components/native";
import * as Location from 'expo-location';
import { ScrollView, Image, Text, Icon } from "react-native";
import { useSelector } from "react-redux";
import { MapStyled, MapStyledView, MapViewContainer, stylesDarkMode, defaultMode } from '../generiComponents/MapsStyles';
import { useNavigation } from "@react-navigation/native";


function Explore() {
  const events = useSelector(state => state.getEventsReducer.events);
  const [location, setLocation] = useState(null);
  const navigation = useNavigation();
  const modes = useSelector(state => state.darkModeReducer.darkMode);
  //true = modo oscuro

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
        <MapStyled customMapStyle={modes?stylesDarkMode:defaultMode} userInterfaceStyle='dark' showsUserLocation loadingEnabled onPress={(e)=>console.log(e.nativeEvent.coordinate) }
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          region={{
            latitude: location?location.coords.latitude:0,
            longitude: location?location.coords.longitude:0,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035,
          }}>

          {events?.map((event)=>
            <Marker key={event.id}
              coordinate={{latitude: parseFloat(event.latitude), longitude: parseFloat(event.longitude)}}
              title={event.name}
              icon={require('../../assets/icon1.png')}>
              
              <Callout onPress={() => navigation.navigate("Detail", { item: event })}>
                <Text>{event.name}</Text>
                <Text>{event.place}</Text>
                <Text>{event.date} {event.time}</Text>
                <Text>${event.price}</Text>
              </Callout>
            </Marker>)
          }
        </MapStyled>
    </MapViewContainer>
  );
}

export default Explore;
