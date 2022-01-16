import Searchbar from "./Searchbar";
import { PROVIDER_GOOGLE, Marker, Callout, Circle } from 'react-native-maps';
import { useState,useEffect } from "react";
import * as Location from 'expo-location';
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { MapStyled, MapViewContainer, stylesDarkMode, defaultMode } from '../generiComponents/MapsStyles';
import { useNavigation } from "@react-navigation/native";


export default function Explore() {
  const events = useSelector(state => state.getEventsReducer.events);
  const [location, setLocation] = useState(null);
  const navigation = useNavigation();
  const modes = useSelector(state => state.darkModeReducer.darkMode);

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
          provider={PROVIDER_GOOGLE} 
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
              icon={require('../../assets/selector.png')}>
              
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
