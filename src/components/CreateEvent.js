import { useState, useEffect } from "react";
import { Image} from "react-native";
import { MapStyled,MapViewContainer,stylesDarkMode, defaultMode } from '../generiComponents/MapsStyles';
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
  ViewBackground,
} from "../generiComponents/GenericStyles";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomMultiPicker from "react-native-multiple-select-list";
import { useNavigation } from "@react-navigation/native";
import { Modal } from 'react-native';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { searchByFilters } from '../stateManagement/actions/getEventsActions';

var selected = [];
export default function CreateEvent() {
  const modes = useSelector(state => state.darkModeReducer.darkMode);
  const [location, setLocation] = useState(null);
  const [mapVisible, setMapVisible] = useState(false); //Controla el modal de mapas

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const initialState = {
    name: "",
    description: "",
    place: "",
    price: "",
    date: "",
    time: "",
    creators: [],
    eventPic: null,
    longitude: "",
    latitude: "",
  };
  const [input, setInput] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [categories, setCategories] = useState([])
  
  function create(event) {
    event.category = selected;
    axios
      .post("https://find-spot.herokuapp.com/events", event)
      .then((res) => {
        dispatch(searchByFilters());
        setInput(initialState)
        navigation.navigate('Home')})
      .catch((res) => console.log(res));
  
  }
  
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
    }
    if (!(Object.entries(error).length === 0)) {
      setErrors(error);
    } else {
      create(input);
    }
  }
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
  
  function hadleInputChange(input, e) {
    if (input === "creators") setInput((prev) => ({ ...prev, [input]: [e] }));
    else setInput((prev) => ({ ...prev, [input]: e }));
  }

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(Platform.OS === "ios");
    if (currentDate) { setInput((prev) => ({ ...prev, date: currentDate.toISOString().slice(0, -14) })) };
  };
  
  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime;
    setShowTime(Platform.OS === "ios");
    if (currentTime) { setInput((prev) => ({ ...prev, time: currentTime.toISOString().slice(11, -8) })) };
  };
  
  const showDatepicker = () => {
    setShow(true);
  };
  
  const showTimepicker = () => {
    setShowTime(true);
  };

  const pickImage = async () => {
    let permit = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (permit.granted){
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    if (!result.cancelled) {
        let newFile = {
          uri: result.uri,
          type: `image/jpg`,
          name:  `EventPic.jpg`,
        }
        handleUpLoadImage(newFile)
        
      };
    } else {
      Alert.alert("No se han dado los permisos para acceder a las fotos")
    }
  };

  const handleUpLoadImage = (image) => {
    let data = new FormData()
    data.append("file", image)
    data.append("upload_preset" , "upload_event_pic")
    data.append("cloud_name" , "findspot")

    fetch("https://api.cloudinary.com/v1_1/findspot/image/upload", {
      method: "POST",
      body: data
    }).then(res => res.json())
    .then(data => setInput(prev => ({ ...prev, "eventPic": data.secure_url })))
  }

  return (
    <ViewBackground>
      <StyledView>
      <StyledTitle> Crear Evento.</StyledTitle>
      <StyledView2>
        <StyledInput placeholderTextColor={"gray"}
        value={input.creators.toString()}
        onChangeText={(ev) => hadleInputChange("creators", ev)}
        placeholder="Organizador"
      />
      {errors.creators && <FormError>{errors.creators}</FormError>}
      <StyledInput
        placeholderTextColor={"gray"}
        value={input.name}
        onChangeText={(ev) => hadleInputChange("name", ev)}
        placeholder="Nombre del evento"
      />
      {errors.name && <FormError>{errors.name}</FormError>}
      <SelectedDate style={{width:"80%"}} onPress={showTimepicker}>
        Hora : {input.time}
      </SelectedDate>
      {errors.time && <FormError>{errors.time}</FormError>}
      <StyledInput
        placeholderTextColor={"gray"}
        multiline = {true}
        value={input.description}
        onChangeText={(ev) => hadleInputChange("description", ev)}
        placeholder="Descripción"
      />
      {errors.description && <FormError>{errors.description}</FormError>}
      <StyledInput
        placeholderTextColor={"gray"}
        value={input.price.toString()}
        onChangeText={(ev) => hadleInputChange("price", ev)}
        placeholder="Precio de la entrada"
      />
      {errors.price && <FormError>{errors.price}</FormError>}
      <StyledInput
        placeholderTextColor={"gray"}
        value={input.place}
        onChangeText={(ev) => hadleInputChange("place", ev)}
        placeholder="Ciudad"
      />
      {errors.place && <FormError>{errors.place}</FormError>}
      <SelectedDate style={{width:"80%"}} onPress={showDatepicker}>
        Fecha : {input.date}
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
        {show && (<DateTimePicker value={new Date} mode="date" display="default" onChange={onDateChange} />)}
        {showTime && (<DateTimePicker value={new Date} mode="time" display="default" is24Hour={true} onChange={onTimeChange} /> )}
        {input.image && <Image source={{ uri: input.image }} style={{ width: 200, height: 200 }} />}
      <StyledButton onPress={() => validate(input)}>
        <TextButton>Enviar</TextButton>
      </StyledButton>
      <Modal animationType="fade" transparent={true} visible={mapVisible}>
        <MapViewContainer>
        <MapStyled customMapStyle={modes?stylesDarkMode:defaultMode} userInterfaceStyle='dark' showsUserLocation loadingEnabled onPress={(e) => handleMapMarker(e.nativeEvent.coordinate.latitude,e.nativeEvent.coordinate.longitude)}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: input.latitude?input.latitude:(location?location.coords.latitude:0),
            longitude: input.longitude?input.longitude:(location?location.coords.longitude:0),
            latitudeDelta: 0.03549,
            longitudeDelta: 0.03554,
          }}
          >
            <Marker
              coordinate={{latitude: input.latitude?input.latitude:0, longitude: input.longitude?input.longitude:0}}
              title={"Tu evento"}
              icon={require('../../assets/selector.png')}              
              />
        </MapStyled>
      <StyledButton onPress={() => setMapVisible(false)}>
        <TextButton>Guardar</TextButton>
      </StyledButton>
          </MapViewContainer>
      </Modal>
    </StyledView>
    </ViewBackground>
    
  );
}