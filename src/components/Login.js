import { useState } from 'react';
import ButtonGen from '../generiComponents/ButtonGen';
import { SectionStyled,TextStyled,ViewStyled,InputStyled,FormStyled,FormError,TitleStyled, StyledInput } from '../generiComponents/GenericStyles';
import axios from 'axios';
import { setUser } from '../stateManagement/actions/authUserActions';
import { useDispatch } from "react-redux";
import { Modal } from 'react-native';
import { ModalContStyled,ModalText,ModalButtonStyled,ButtonText } from '../generiComponents/ModalGen';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  
  const initialState = { //Estado inicial para usuarios
    email: "",
    password: "",
  };
  
  const [input, setInput] = useState(initialState); //Crea el estado que contiene los datos
  const [errors,setErrors] = useState({});  //Crea el estado que contendrá los errores
  const [modalVisible, setModalVisible] = useState(false); //Controla el modal de error al loguear
  
  function loginUser(user){
      axios.post('https://find-spot.herokuapp.com/login',user) //Envia por post la a crear
        .then((res) => {
          dispatch(setUser(res.data));
          navigation.navigate('Home');
        })
        .catch((res)=>setModalVisible(true));  
  };
  
  function validate(input) {
    let error={};       //Guarda temporalmente los errores encontrados
    if(!input.email){error.email="Requerido"}
    else if(!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i).test(input.email)){error.email="Correo invalido"};
    if (!input.password) { error.password = "Requerido" };
    if (!(Object.entries(error).length===0)) { setErrors(error) }
    else { loginUser(input) };
  };
  
  function hadleInputChange(input,e) {               //Cuando se digita lo guarda en el estado
    setInput(prev => ({ ...prev, [input]: e }))
  };
  
  return (
    <ViewStyled>
      <TitleStyled>findSpot</TitleStyled>
     <InputStyled value={input.email} onChangeText={(ev)=>hadleInputChange("email",ev)} placeholder="Correo" placeholderTextColor='gray' keyboardType='email-address'/>
        {errors.email&&(<FormError>{errors.email}</FormError>)}
      <InputStyled value={input.password} onChangeText={(ev)=>hadleInputChange("password",ev)} placeholder="Contraseña" placeholderTextColor='gray' secureTextEntry/>
        {errors.password&&(<FormError>{errors.password}</FormError>)}
      <SectionStyled>
        <ButtonGen title="Acceder" onPress={()=>validate(input)}/>
        <TextStyled style={{ color: "red" }} >Olvidaste tu contraseña</TextStyled>
      </SectionStyled>
      <SectionStyled>
        <TextStyled style={{ color: "#999999" }}>¿No tienes una cuenta?</TextStyled>
        <ButtonGen title="Registrate" onPress={() => navigation.navigate('Register')} />
      </SectionStyled>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <ModalContStyled>
          <ModalText>Usuario o contraseña incorrectos</ModalText>
          <ModalButtonStyled onPress={() => setModalVisible(false)}>
            <ButtonText>Aceptar</ButtonText>
          </ModalButtonStyled>
        </ModalContStyled>
      </Modal>
    </ViewStyled>
  );
}