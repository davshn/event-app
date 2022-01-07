import { useState } from 'react';
import ButtonGen from '../generiComponents/ButtonGen';
import { TextStyled, ViewStyled, InputStyled, FormStyled, FormError } from '../generiComponents/GenericStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import {Image} from 'react-native' ; 
import axios from 'axios';

function createUser(user){
        axios.post('https://find-spot.herokuapp.com/register',user) //Envia por post la a crear
        .then((res)=>{console.log("Usuario creado");})
        .catch((res)=>console.log(res));  
};

export default function Register() {
  var today = new Date();
  const initialState = { //Estado inicial para usuarios
    name: "",
    email: "",
    password: "",
    dateOfBirth: today,
    image: null,
    interests:[],
  };

  const [input, setInput] = useState(initialState); //Crea el estado que contiene los datos
  const [errors, setErrors] = useState({});  //Crea el estado que contendrá los errores
  const [show, setShow] = useState(false);
  
  function hadleInputChange(input,e) {               //Cuando se digita lo guarda en el estado
    setInput(prev => ({ ...prev, [input]: e }))
  };
  
  function validate(input) {
    let error={};       //Guarda temporalmente los errores encontrados
    if (!input.name) { error.name = "Requerido" }
    else if(!(/^[a-z ,.'-]+$/i).test(input.name)){error.name="Nombre invalido"};
    if (!input.email) { error.email = "Requerido" }
    else if(!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i).test(input.email)){error.email="Correo invalido"};
    if (!input.password) { error.password = "Requerido" }
    else if (!(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i).test(input.password)) { error.password = "Contraseña insegura" };
    if (!validateAge()) { error.dateOfBirth = "Debes ser mayor de edad" };
    if (!(Object.entries(error).length===0)) { setErrors(error) }
    else { createUser(input) };
  };
  
  function validateAge() {
    var year = today.getFullYear() - input.dateOfBirth.getFullYear();
    var month = today.getMonth() - input.dateOfBirth.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < input.dateOfBirth.getDate())) {
        year--;
    }
    if (year < 18) { return false };
    return true;
  }
    
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || input.dateOfBirth;
    setShow(Platform.OS === 'ios');
    setInput(prev => ({ ...prev, "dateOfBirth": currentDate }))
  };

  const showDatepicker = () => {
    setShow(true);
  };
  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setInput(prev => ({ ...prev, "image": result.uri }))
    };
  };

  return (
    <ViewStyled>
      <FormStyled>
        <InputStyled value={input.name} onChangeText={(ev)=>hadleInputChange("name",ev)} placeholder="Nombre completo" placeholderTextColor='gray' />
        {errors.name&&(<FormError>{errors.name}</FormError>)}
      </FormStyled>
      <FormStyled>
        <InputStyled value={input.email} onChangeText={(ev)=>hadleInputChange("email",ev)} placeholder="Correo" placeholderTextColor='gray' keyboardType='email-address'/>
        {errors.email&&(<FormError>{errors.email}</FormError>)}
      </FormStyled>
      <FormStyled>
        <InputStyled value={input.password} onChangeText={(ev)=>hadleInputChange("password",ev)} placeholder="Contraseña" placeholderTextColor='gray' secureTextEntry/>
        {errors.password&&(<FormError>{errors.password}</FormError>)}
      </FormStyled>
      <FormStyled>
      <TextStyled style={{ color: "gray"}} onPress={showDatepicker}>Año de nacimiento</TextStyled>
        {errors.dateOfBirth&&(<FormError>{errors.dateOfBirth}</FormError>)}
      </FormStyled>
      <TextStyled onPress={pickImage} style={{ color: "red"}}>Subir Foto perfil </TextStyled>
      <ButtonGen title="intereses" />
      <ButtonGen title="Enviar" onPress={()=>validate(input)} />
        {show && (<DateTimePicker value={input.dateOfBirth} mode='date' display="default" onChange={onChange} /> )}
        {input.image && <Image source={{ uri: input.image }} style={{ width: 200, height: 200 }} />}
    </ViewStyled>
  );
}