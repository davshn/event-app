import { useState,useEffect } from 'react';
import ButtonGen from '../generiComponents/ButtonGen';
import { TextStyled, ViewStyled, InputStyled, FormError,SmallerText, StyledTitle } from '../generiComponents/GenericStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import {Alert, Image} from 'react-native' ; 
import axios from 'axios';
import { Modal } from 'react-native';
import { ModalContStyled, ModalText, ModalButtonStyled, ButtonText } from '../generiComponents/ModalGen';
import CustomMultiPicker from "react-native-multiple-select-list";


export default function Register({ navigation }) {
  let selected = [];
  const initialState = { //Estado inicial para usuarios
    name: "",
    email: "",
    password: "",
    passwordRep:"",
    dateOfBirth: "",
    profilePic: null,
    interests:[],
  };
  const [input, setInput] = useState(initialState); //Crea el estado que contiene los datos
  const [errors, setErrors] = useState({});  //Crea el estado que contendrá los errores
  const [show, setShow] = useState(false);  //Controla visibilidad del datepicker
  const [modalVisible, setModalVisible] = useState(false); //Controla el modal de error al crear usuario
  const [categories, setCategories] = useState([]);
  
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
  
  function createUser(user) {
    user.interests = selected;
    axios.post('https://find-spot.herokuapp.com/register',user) //Envia por post la a crear
      .then((res) => {
        setInput(initialState);
        navigation.navigate('Login');})
      .catch((res)=>setModalVisible(true));  
  };
  
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
    if(input.password!==input.passwordRep){error.passwordRep = "Contraseña no coincide"}
    if (!validateAge()) { error.dateOfBirth = "Debes ser mayor de edad" };
    if (!(Object.entries(error).length===0)) { setErrors(error) }
    else { createUser(input) };
  };
  
  function validateAge() {          //Valida que la edad sea 18 o mas
    if (input.dateOfBirth === "") { return false };
    const today = new Date();
    const date = input.dateOfBirth.split('-');
    const birth = new Date(date[0], date[1], date[2]);
    let year = today.getFullYear() - birth.getFullYear();
    let month = today.getMonth() - birth.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
        year--;
    }
    if (year < 18) { return false };
    return true;
  }
    
  const onChange = (event, selectedDate) => {             //Guarda la fecha seleccionada
    const currentDate = selectedDate;
    setShow(Platform.OS === 'ios');
    if (currentDate) { setInput(prev => ({ ...prev, "dateOfBirth": currentDate.toISOString().slice(0, -14) })) };
  };

  const showDatepicker = () => {
    setShow(true);
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
          name:  `ProfilePic.jpg`,
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
    data.append("upload_preset" , "upload_profile_pic")
    data.append("cloud_name" , "findspot")

    fetch("https://api.cloudinary.com/v1_1/findspot/image/upload", {
      method: "POST",
      body: data
    }).then(res => res.json())
    .then(data => setInput(prev => ({ ...prev, "image": data.secure_url })))
  }


  return (
    <ViewStyled>
       <StyledTitle> Registrarse</StyledTitle>
        <InputStyled value={input.name} onChangeText={(ev)=>hadleInputChange("name",ev)} placeholder="Nombre completo" placeholderTextColor='gray' />
        {errors.name&&(<FormError>{errors.name}</FormError>)}
        <InputStyled value={input.email} onChangeText={(ev)=>hadleInputChange("email",ev)} placeholder="Correo" placeholderTextColor='gray' keyboardType='email-address'/>
        {errors.email&&(<FormError>{errors.email}</FormError>)}
        <InputStyled value={input.password} onChangeText={(ev)=>hadleInputChange("password",ev)} placeholder="Contraseña" placeholderTextColor='gray' secureTextEntry/>
        {errors.password&&(<FormError>{errors.password}</FormError>)}
        <InputStyled value={input.passwordRep} onChangeText={(ev)=>hadleInputChange("passwordRep",ev)} placeholder="Repite la contraseña" placeholderTextColor='gray' secureTextEntry/>
        {errors.passwordRep&&(<FormError>{errors.passwordRep}</FormError>)}
        <TextStyled style={{ color: "gray" }} onPress={showDatepicker}>Año de nacimiento:{input.dateOfBirth}</TextStyled>
        {errors.dateOfBirth&&(<FormError>{errors.dateOfBirth}</FormError>)}
      <TextStyled onPress={pickImage} style={{ color: "red" }}>Agregar foto de perfil </TextStyled>
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
      <ButtonGen title="Enviar" onPress={() => validate(input)} />
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <ModalContStyled>
          <ModalText>Verifica tus datos</ModalText>
          <ModalButtonStyled onPress={() => setModalVisible(false)}>
            <ButtonText>Aceptar</ButtonText>
          </ModalButtonStyled>
        </ModalContStyled>
      </Modal>
        {show && (<DateTimePicker value={new Date()} mode='date' display="default" onChange={onChange} /> )}
        {input.image && <Image source={{ uri: input.image }} style={{ width: 200, height: 200 }} />}
    </ViewStyled>
  );
}