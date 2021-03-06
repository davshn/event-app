import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
import { useDispatch } from "react-redux";
import { searchByFilters } from '../stateManagement/actions/getEventsActions';

  const state = { 
    name: "",
    initialPrice:"",
    finalPrice: "",
    initialDate: "",
    finalDate:"",
    type:"",
    sortType:"",
};


var selected = [];
export default function EditEvent({route}) {
  const user = useSelector((state) => state.authUserReducer);
  const categories = useSelector((state) => state.getCategoriesReducer.categories);
  const modes = useSelector(state => state.darkModeReducer.darkMode);
  const [location, setLocation] = useState(null);
  const [mapVisible, setMapVisible] = useState(false); //Controla el modal de mapas
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const event = route.params.item;
  const initialState = {
    id:event.id,
    name: event.name,
    description: event.description,
    place: event.place,
    price: event.price,
    date: event.date,
    time: event.time,
    creators: user.id,
    eventPic: event.eventPic,
    eventVid:null,
    longitude: "",
    latitude: "",
    capacity: event.capacity.toString(),
    token: user.token,
  };
  const [input, setInput] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [showTime, setShowTime] = useState(false);
  function create(event) {
    event.category = selected;
    axios
      .post("https://find-spot.herokuapp.com/events/updateEvent", event)
      .then((res) => {
        dispatch(searchByFilters(state));
        setInput(initialState)
        navigation.navigate('Home')})
      .catch((res) => console.log(res));
  }
  
  function validate(input) {
    setErrors({})
    let error = {};
    if (!input.name) {
      error.name = "Campo requerido";
    }
    if (!input.capacity) {
      error.capacity = "Campo requerido";
    }
    if (!input.place) {
      error.place = "Campo requerido";
    }
    if (!input.time) {
      error.time = "Campo requerido";
    }
    if (!input.description) {
      error.description = "Campo requerido";
    }
    if (!input.latitude) {
      error.latitude = "Por favor ingrese una ubicaci??n";
    }
    if (!input.price) {
      error.price = "Campo requerido";
    }
    if (selected.length<1) {
      error.category = "Ingrese al menos una categoria";
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
    setByTimezone(selectedDate);
    const currentDate = selectedDate;
    setShow(Platform.OS === "ios");
    if (currentDate) { setInput((prev) => ({ ...prev, date: currentDate.toISOString().slice(0, -14) })) };
  };
  
  const onTimeChange = (event, selectedTime) => {
    setByTimezone(selectedTime);
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
  const setByTimezone = (time) => {
    const date = new Date()
    const difference = -date.getTimezoneOffset() / 60
    time.setHours(time.getHours() + difference)
}
  return (
    <ViewBackground>
      <StyledView>
      <StyledTitle>Editar Evento.</StyledTitle>
      <StyledView2>
      <StyledInput
        placeholderTextColor={"gray"}
        value={input.name}
        onChangeText={(ev) => hadleInputChange("name", ev)}
        placeholder="Nombre del evento"
      />
      {errors.name && <FormError>{errors.name}</FormError>}
      {input.time? <SelectedDate style={{width:"80%", color: modes? '#EDEDED' : '#292929'}} onPress={showTimepicker}>
       {input.time} hs
      </SelectedDate> : <SelectedDate style={{width:"80%"}} onPress={showTimepicker}>
        Hora
      </SelectedDate>}
      {errors.time && <FormError>{errors.time}</FormError>}
      <StyledInput
        placeholderTextColor={"gray"}
        multiline = {true}
        value={input.description}
        onChangeText={(ev) => hadleInputChange("description", ev)}
        placeholder="Descripci??n"
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
        value={input.capacity}
        onChangeText={(ev) => hadleInputChange("capacity", ev)}
        placeholder="Aforo m??ximo"
      />
      {errors.capacity && <FormError>{errors.capacity}</FormError>}
      <StyledInput
        placeholderTextColor={"gray"}
        value={input.place}
        onChangeText={(ev) => hadleInputChange("place", ev)}
        placeholder="Ciudad"
      />
      {errors.place && <FormError>{errors.place}</FormError>}
      {input.date? <SelectedDate style={{width:"80%", color: modes? '#EDEDED' : '#292929'}} onPress={showDatepicker}>
       {input.date}
      </SelectedDate> : <SelectedDate style={{width:"80%"}} onPress={showDatepicker}>
       Fecha
      </SelectedDate>}
      </StyledView2>
      
      <SmallerText>Categor??as:</SmallerText>
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
        {errors.category && <FormError>{errors.category}</FormError>}
      <UploadPic onPress={pickImage}>Cambiar foto</UploadPic>
      <UploadPic onPress={()=>setMapVisible(true)}>Cambiar ubicacion</UploadPic>
        {errors.latitude && <FormError>{errors.latitude}</FormError>}
        {show && (<DateTimePicker value={new Date} mode="date" display="default" onChange={onDateChange} />)}
        {showTime && (<DateTimePicker value={new Date} mode="time" display="default" is24Hour={true} onChange={onTimeChange} /> )}
        {input.eventPic && <Image source={{ uri: input.eventPic }} style={{ width: "85%", height: 180, alignSelf: "center", marginBottom: "5%", marginTop: "1%", borderRadius: 10 }} />}
      <StyledButton onPress={() => validate(input)}>
        <TextButton>Actualizar</TextButton>
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