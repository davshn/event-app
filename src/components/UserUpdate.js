import { useState } from 'react';
import ButtonGen from '../generiComponents/ButtonGen';
import { InputStyled, FormError, StyledTitle, ViewBackground, AgregarFotoButton, TextButton, ProfilePic, TextStyled, TermsText, TermsModal } from '../generiComponents/GenericStyles';
import * as ImagePicker from 'expo-image-picker';
import {Alert, View} from 'react-native' ; 
import axios from 'axios';
import { Modal,Text } from 'react-native';
import { ModalContStyled, ModalText, ModalButtonStyled, ButtonText } from '../generiComponents/ModalGen';
import { useSelector } from "react-redux"
import { TermsConditions } from "./Terms&Contditions"
import styled from "styled-components/native";
import { backgroundColor } from "../services/theme";

export default function Register({ navigation }) {
  const user = useSelector((state) => state.authUserReducer);
  const initialState = { //Estado inicial para usuarios
    id:user.id,
    name: user.name,
    password: "",
    passwordRep:"",
    profilePic: user.profilePic,
    token:user.token,
  };
  const [input, setInput] = useState(initialState); //Crea el estado que contiene los datos
  const [errors, setErrors] = useState({});  //Crea el estado que contendrá los errores
  const [modalVisible, setModalVisible] = useState(false); //Controla el modal de error al crear usuario
  const [termsmodalVisible, setTermsModalVisible] = useState(false);

  function createUser(user) {
    axios.post('https://find-spot.herokuapp.com/register/updateUser',user) //Envia por post la a crear
      .then((res) => {
        setInput(initialState);
        navigation.navigate('Home');
      })
      .catch((res)=>setModalVisible(true));  
  };
  
  function hadleInputChange(input,e) {               //Cuando se digita lo guarda en el estado
    setInput(prev => ({ ...prev, [input]: e }))
  };
  
  function validate(input) {
    let error={};       //Guarda temporalmente los errores encontrados
    if (!input.name) { error.name = "Campo requerido" }
    else if(!(/^[a-z ,.'-]+$/i).test(input.name)){error.name="Nombre invalido"};
    if (!input.password) { error.password = "Campo requerido" }
    else if (!(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i).test(input.password)) { error.password = "Contraseña insegura" };
    if(input.password!==input.passwordRep){error.passwordRep = "Contraseña no coincide"}
    if (!(Object.entries(error).length===0)) { setErrors(error) }
    else { createUser(input) };
  };
   
  const pickImage = async () => {
    let permit = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (permit.granted){
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [3, 3],
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
    .then(data => setInput(prev => ({ ...prev, "profilePic": data.secure_url })))
  }


  return (
    <ViewBackground style= {{height: 680}}>
      <StyledView  style={{justifyContent: "space-evenly", height: "90%"}}>
        <StyledTitle style={{bottom: "8%"}}> Actualizar perfil</StyledTitle>
        <View style={{bottom: "4%"}}>
          <InputStyled value={input.name} onChangeText={(ev)=>hadleInputChange("name",ev)} placeholder="Nombre completo" placeholderTextColor='gray' />
          {errors.name&&(<FormError>{errors.name}</FormError>)}
          <InputStyled value={input.password} onChangeText={(ev)=>hadleInputChange("password",ev)} placeholder="Contraseña" placeholderTextColor='gray' secureTextEntry/>
          {errors.password&&(<FormError>{errors.password}</FormError>)}
          <InputStyled value={input.passwordRep} onChangeText={(ev)=>hadleInputChange("passwordRep",ev)} placeholder="Repite la contraseña" placeholderTextColor='gray' secureTextEntry/>
          {errors.passwordRep&&(<FormError>{errors.passwordRep}</FormError>)}
        </View>
      <AgregarFotoButton onPress={pickImage}>
        <TextButton color={'#EDEDED'}>Cambiar foto de perfil</TextButton>
      </AgregarFotoButton>
      {input.profilePic && <ProfilePic source={{ uri: input.profilePic }}/>}
     <TextStyled ><TermsText style={{ color: "#999999"}} onPress={() => setTermsModalVisible(true)}>Términos y condiciones</TermsText></TextStyled>
      <ButtonGen textcolor={'#EDEDED'} title="Enviar" onPress={() => validate(input)} /> 
      <Modal animationType="fade" transparent={true} visible={termsmodalVisible}>
        <TermsModal>
          <TermsConditions/>
          <ModalButtonStyled onPress={() => setTermsModalVisible(false)}>
            <ButtonText>Aceptar</ButtonText>
          </ModalButtonStyled>
        </TermsModal>
      </Modal>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <ModalContStyled>
          <ModalText>Verifica tus datos</ModalText>
          <ModalButtonStyled onPress={() => setModalVisible(false)}>
            <ButtonText>Aceptar</ButtonText>
          </ModalButtonStyled>
        </ModalContStyled>
      </Modal>
      </StyledView>
    </ViewBackground>
  );
}

const StyledView = styled.View`
  margin: 6%;
  border: 0.5px solid grey;
  padding: 4%;
  border-radius: 10px;
  padding-bottom: 10px;
  background-color:${backgroundColor};
`;