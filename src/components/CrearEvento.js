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
  FormError,
  EventFormImage,
  ViewBackground,
} from "../generiComponents/GenericStyles";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomMultiPicker from "react-native-multiple-select-list";
import { Modal } from 'react-native';
import { useSelector } from "react-redux"

function createEvent(evento) {
  evento.category = selected;
  evento.date = evento.date.toISOString().slice(0, -14);
  axios
    .post("https://find-spot.herokuapp.com/events", evento)
    .then((res) => console.log("Success"))
    .catch((res) => console.log(res));
  // console.log(evento)
}

var selected = [];
export function CrearEvento() {
  const modes = useSelector(state => state.darkModeReducer.darkMode);
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
  const [categories, setCategories] = useState([])
  
  function getCategories() {
    axios
      .get("https://find-spot.herokuapp.com/categories")
      .then((res) => {
        let formatted = {}
        res.data.map(category => {
          formatted[category.id] = category.name
        })
        setCategories(formatted);
      })
      .catch((res) => console.log(res))
  }

  useEffect(() => getCategories(), []);

  // function validateDate() {
  //   let year =  input.date.getFullYear();
  //   let month = input.date.getMonth();
  //   if (
  //     month < 0 ||
  //     (month === 0 && today.getDate() < input.date.getDate())
  //   ) {
  //     year--;
  //   }
  //   if (year < 18) {
  //     return false;
  //   }
  //   return true;
  // } validar fecha

  function validate(input) {
    setErrors({})
    let error = {};
    if (!input.name) {
      error.name = "Campo requerido";
    }
    if (!input.place) {
      error.place = "Campo requerido";
    }
    if (!input.time) {
      error.time = "Campo requerido";
    }
    if (!input.creators.toString()) {
      error.creators = "Campo requerido";
    }
    if (!input.description) {
      error.description = "Campo requerido";
    }
    if (!input.latitude) {
      error.latitude = "Por favor ingrese una ubicación";
    }
    if (!input.price) {
      error.price = "Campo requerido";
    }
    else if(isNaN(parseInt(input.price))){
      error.price = "El valor ingresado no es valido";
      console.log(typeof(parseInt(input.price)))
      console.log(input.price)
    }
    // if (!validateDate()) {
    //   error.date = "Ingrese una fecha correcta";
    // }
    if (!(Object.entries(error).length === 0)) {
      setErrors(error);
    } else {
      createEvent(input);
    }
  }

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
    // if (input === "price"){
    //    setInput((prev) => ({...prev, price: parseInt(e)}));
    // } 
    if (input === "creators") setInput((prev) => ({ ...prev, [input]: [e] }));
    else setInput((prev) => ({ ...prev, [input]: e }));
  }

  const onDateChange = (event, selectedDate) => {
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
    <ViewBackground>
      <StyledView>
      <StyledTitle> Crear Evento.</StyledTitle>
      <StyledView2>
        <StyledInput
        value={input.creators.toString()}
        onChangeText={(ev) => hadleInputChange("creators", ev)}
        placeholder="Organizador"
      />
      {errors.creators && <FormError>{errors.creators}</FormError>}
      <StyledInput
        value={input.name}
        onChangeText={(ev) => hadleInputChange("name", ev)}
        placeholder="Nombre del evento"
      />
      {errors.name && <FormError>{errors.name}</FormError>}
      <StyledInput
        value={input.time}
        onChangeText={(ev) => hadleInputChange("time", ev)}
        placeholder="HH:MM"
      />
      {errors.time && <FormError>{errors.time}</FormError>}
      <StyledInput
        multiline = {true}
        value={input.description}
        onChangeText={(ev) => hadleInputChange("description", ev)}
        placeholder="Descripción"
      />
      {errors.description && <FormError>{errors.description}</FormError>}
      <StyledInput
        value={input.price.toString()}
        onChangeText={(ev) => hadleInputChange("price", ev)}
        placeholder="Precio de la entrada"
      />
      {errors.price && <FormError>{errors.price}</FormError>}
      <StyledInput
        value={input.place}
        onChangeText={(ev) => hadleInputChange("place", ev)}
        placeholder="Ubicación"
      />
      {errors.place && <FormError>{errors.place}</FormError>}
      <SelectedDate onPress={showDatepicker}>
        Fecha : {input.date.toISOString().slice(0, -14)}
      </SelectedDate>
      </StyledView2>
      
      <SmallerText>Categorías:</SmallerText>
      <CustomMultiPicker
        options={categories}
        search={false} 
        multiple={true}
        placeholder={"Search"}
        placeholderTextColor={"#757575"}
        returnValue={"label"}
        callback={(res) => {
          selected = res;
        }}
        rowBackgroundColor={"modes? '#292929' : '#EDEDED'"}
        rowHeight={40}
        rowRadius={5}
        searchIconName="ios-checkmark"
        searchIconColor="red"
        searchIconSize={30}
        iconColor={"#776BC7"}
        textColor={"#776BC7"}
        iconSize={26}
        selectedIconName={"ios-checkmark-circle-outline"}
        unselectedIconName={"ios-radio-button-off-outline"}
        scrollViewHeight={340}
        selected={[]}
        border={"#776BC7"}
      />
      <UploadPic onPress={pickImage}>Subir foto</UploadPic>
      <UploadPic onPress={()=>setMapVisible(true)}>Agregar ubicacion</UploadPic>
      {errors.latitude && <FormError>{errors.latitude}</FormError>}
      {show && (
        <DateTimePicker
          value={input.date}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
         {input.image && (
  
            <EventFormImage
              source={{ uri: input.image }}
              style={{ width: 200, height: 200 }}
            /> 
     
          )}
      <StyledButton onPress={() => validate(input)}>
        <TextButton>Enviar</TextButton>
      </StyledButton>
      
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
    </ViewBackground>
    
  );
}