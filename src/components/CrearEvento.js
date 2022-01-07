import { useState } from "react"
import { Image, Text } from "react-native"
import ButtonGen from "../generiComponents/ButtonGen"
import { StyledView, StyledInput } from '../generiComponents/GenericStyles';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';x


function  createEvent(evento){
  axios.post('https://find-spot.herokuapp.com/events', evento) 
  .then((res)=>{console.log("Exito");})
  .catch((res)=>console.log(res));  
} 

export function CrearEvento(){
  var today = new Date();
  const initialState = {
    name: "",
    description: "",
    place: "",
    price: "",
    date: "",
    time: "",
    creators: [],
    image: null,
    category : ["Karaoke", "Fiesta"]
  }
  const [input, setInput] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);

  function hadleInputChange(input,e) {
    input === "creators"? setInput(prev => ({ ...prev, [input]: [e]}))
    : setInput(prev => ({ ...prev, [input]: e }))
  };  

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || input.date;
    setShow(Platform.OS === 'ios');
    setInput(prev => ({ ...prev, "date": currentDate }))
  };

  // const showDatepicker = () => {
  //   setShow(true);
  // };
  
  // const pickImage = async () => {
  //       let result = await ImagePicker.launchImageLibraryAsync({
  //         mediaTypes: ImagePicker.MediaTypeOptions.All,
  //         allowsEditing: true,
  //         aspect: [4, 3],
  //         quality: 1,
  //       });
  //       if (!result.cancelled) {
  //         setInput(prev => ({ ...prev, "image": result.uri }))
  //       };
  //   };

    return( 
            <StyledView>
                <Text>Crear Evento</Text>
                <StyledInput value={input.creators} onChangeText={(ev)=>hadleInputChange("creators",ev)} placeholder="Organizador"/>
                <StyledInput value={input.name} onChangeText={(ev)=>hadleInputChange("name",ev)} placeholder="Nombre del evento"/>
                <StyledInput value={input.date} onChangeText={(ev)=>hadleInputChange("date",ev)} placeholder="AAAA-MM-DD"/>
                <StyledInput value={input.time} onChangeText={(ev)=>hadleInputChange("time",ev)} placeholder="HH:MM"/>
                <StyledInput value={input.description} onChangeText={(ev)=>hadleInputChange("description",ev)} placeholder="Descripción"/>
                <StyledInput value={input.price} onChangeText={(ev)=>hadleInputChange("price",ev)} placeholder="Precio de la entrada"/>
                <StyledInput value={input.place} onChangeText={(ev)=>hadleInputChange("place",ev)} placeholder="Ubicación"/> 
                {/* <Text onPress={showDatepicker}>Seleccionar fecha</Text> */}
                {/* <ButtonGen title="Subir foto" onPress={pickImage}/> */}
                <ButtonGen title="Enviar" onPress={() => createEvent(input)}/>
                {show && (<DateTimePicker value={input.date} mode='date' display="default" onChange={onChange} /> )}
                {/* {input.image && <Image source={{ uri: input.image }} style={{ width: 200, height: 200 }} />} */}
            </StyledView>
    )
} 