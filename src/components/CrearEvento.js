import { useState, useEffect } from "react";
import { Image, Text } from "react-native";
import { MapStyled,MapContainertStyled } from '../generiComponents/MapsStyles';
import {PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import {
  StyledView,
  StyledInput,
  StyledTitle,
  SmallerText,
  UploadPic,
  StyledButton,
  TextButton,
  SelectedDate,
  StyledView2,
} from "../generiComponents/GenericStyles";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";
import CustomMultiPicker from "react-native-multiple-select-list";
import { Modal } from 'react-native';

function createEvent(evento) {
  // evento.creators = [evento.creators]
  evento.category = selected;
  evento.date = evento.date.toISOString().slice(0, -14);
  // evento.price = parseInt(evento.price)
  axios
    .post("https://find-spot.herokuapp.com/events", evento)
    .then((res) => {
      console.log(evento);
    })
    .catch((res) => console.log(res));
  console.log(evento);
}

var selected = [];
const categories = {
  123: "Fiestas",
  124: "Karaoke",
  125: "After",
  126: "Conciertos",
  127: "Eventos culturales",
  128: "Deportivo",
  129: "Gastronomia",
};

export function CrearEvento() {

  //Logica modal mapas no tocar
  const [location, setLocation] = useState(null);
  const [mapVisible, setMapVisible] = useState(false); //Controla el modal de mapas
  //Fin
  
  var today = new Date();

  const initialState = {
    name: "",
    description: "",
    place: "",
    price: "",
    date: today,
    time: "",
    creators: [],
    image: null,
    longitude: "",
    latitude:"",
  };
  const [input, setInput] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);

  //Logica modal mapas no tocar
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

  function handleMapMarker(lat,long) {
    setInput((prev) => ({
      ...prev,
      latitude: lat,
      longitude: long,
    }));
  }
  
  //Fin
  
  
  function hadleInputChange(input, e) {
    if (input === "price")
      setInput((prev) => ({ ...prev, price: parseInt(e) }));
    else if (input === "creators")
      setInput((prev) => ({ ...prev, [input]: [e] }));
    else setInput((prev) => ({ ...prev, [input]: e }));
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || input.date;
    setShow(Platform.OS === "ios");
    setInput((prev) => ({ ...prev, date: currentDate }));
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setInput((prev) => ({ ...prev, image: result.uri }));
    }
  };

  return (
    <StyledView>
      <StyledTitle> Crear Evento.</StyledTitle>
      <StyledView2>
        <StyledInput
        value={input.creators.toString()}
        onChangeText={(ev) => hadleInputChange("creators", ev)}
        placeholder="Organizador"
      />
      <StyledInput
        value={input.name}
        onChangeText={(ev) => hadleInputChange("name", ev)}
        placeholder="Nombre del evento"
      />
      <StyledInput
        value={input.time}
        onChangeText={(ev) => hadleInputChange("time", ev)}
        placeholder="HH:MM"
      />
      <StyledInput
        value={input.description}
        onChangeText={(ev) => hadleInputChange("description", ev)}
        placeholder="Descripción"
      />
      <StyledInput
        value={input.price.toString()}
        onChangeText={(ev) => hadleInputChange("price", ev)}
        placeholder="Precio de la entrada"
      />
      <StyledInput
        value={input.place}
        onChangeText={(ev) => hadleInputChange("place", ev)}
        placeholder="Ubicación"
      />
      </StyledView2>
      
      <SmallerText>Categorías:</SmallerText>
      <CustomMultiPicker
        options={categories}
        search={false} // should show search bar?
        multiple={true} //
        placeholder={"Search"}
        placeholderTextColor={"#757575"}
        returnValue={"label"} // label or value
        callback={(res) => {
          selected = res;
        }} // callback, array of selected items
        rowBackgroundColor={"#eee"}
        rowHeight={40}
        rowRadius={5}
        searchIconName="ios-checkmark"
        searchIconColor="red"
        searchIconSize={30}
        iconColor={"#5641abff"}
        iconSize={28}
        selectedIconName={"ios-checkmark-circle-outline"}
        unselectedIconName={"ios-radio-button-off-outline"}
        scrollViewHeight={340}
        selected={[]} // list of options which are selected by default
      />
      <SelectedDate onPress={showDatepicker}>
        Fecha : {input.date.toISOString().slice(0, -14)}
      </SelectedDate>
      <UploadPic onPress={pickImage}>Subir foto</UploadPic>
      <UploadPic onPress={()=>setMapVisible(true)}>Agregar ubicacion</UploadPic>
      <StyledButton onPress={() => createEvent(input)}>
        <TextButton>Enviar</TextButton>
      </StyledButton>
      {show && (
        <DateTimePicker
          value={input.date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      {input.image && (
        <Image
          source={{ uri: input.image }}
          style={{ width: 200, height: 200 }}
        />
      )}
      
      {/*Logica del modal de mapas, no borrar*/}
      <Modal animationType="fade" transparent={true} visible={mapVisible}>
        <MapContainertStyled>
        <MapStyled showsUserLocation loadingEnabled onPress={(e) => handleMapMarker(e.nativeEvent.coordinate.latitude,e.nativeEvent.coordinate.longitude)}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: location?location.coords.latitude:0,
            longitude: location?location.coords.longitude:0,
            latitudeDelta: 0.00049,
            longitudeDelta: 0.00054,
          }}
          >
            <Marker
              coordinate={{latitude: input.latitude?input.latitude:0, longitude: input.longitude?input.longitude:0}}
              title={"Tu evento"}/>
        </MapStyled>
      <StyledButton onPress={() => setMapVisible(false)}>
        <TextButton>Guardar</TextButton>
      </StyledButton>
          </MapContainertStyled>
      </Modal>
      
      
    </StyledView>
  );
}