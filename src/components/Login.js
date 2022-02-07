import { useState } from 'react';
import ButtonGen from '../generiComponents/ButtonGen';
import { SectionStyled,TextStyled,ViewStyled,InputStyled,FormError,TitleStyled, StyledTitle} from '../generiComponents/GenericStyles';
import axios from 'axios';
import { setUser } from '../stateManagement/actions/authUserActions';
import { useDispatch , useSelector} from "react-redux";
import { Modal } from 'react-native';
import { ModalContStyled,ModalText,ModalButtonStyled,ButtonText } from '../generiComponents/ModalGen';
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

export default function Login({navigation}) {
  const dispatch = useDispatch();
  
  const initialState = { //Estado inicial para usuarios
    email: "",
    password: "",
  };
  
  const [input, setInput] = useState(initialState); //Crea el estado que contiene los datos
  const [errors, setErrors] = useState({});  //Crea el estado que contendrá los errores
  const [modalForgot, setModalForgot] = useState(false); //Controla el modal Forgot
  const [modalVisible, setModalVisible] = useState(false); //Controla el modal de error al loguear
  const [mail, setMail] = useState("");
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const modes = useSelector(state => state.darkModeReducer.darkMode);
  
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
  
  function forgotPass(email) {
  axios.post('https://find-spot.herokuapp.com/forgot',{email:email}) //Envia por post la a crear
        .then((res) => {
          setModalForgot(false);
        })
        .catch((res)=>setModalForgot(false));  
  }
  
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    setHidePassword(!hidePassword)
    }


  return (
    <ViewStyled>
      <TitleStyled style={{bottom: 20}}>findSpot</TitleStyled>
     <InputStyled value={input.email} onChangeText={(ev)=>hadleInputChange("email",ev)} placeholder="Correo" placeholderTextColor='gray' keyboardType='email-address'/>
        {errors.email&&(<FormError style={{marginLeft: "4%"}}>{errors.email}</FormError>)}
      <InputStyled value={input.password} onChangeText={(ev)=>hadleInputChange("password",ev)} placeholder="Contraseña" placeholderTextColor='gray' secureTextEntry={hidePassword}/>
        {errors.password&&(<FormError style={{marginLeft: "4%"}}>{errors.password}</FormError>)}
        <StyledTitle>
            {isSwitchOn ? <MaterialCommunityIcons
                  name="eye-outline"
                  color={modes? "#776BC7" : "#5302de"}
                  size={30}
                  
                  alignSelf="center"
                  onPress={onToggleSwitch}
                /> : <MaterialCommunityIcons
                name="eye-off-outline"
                color={modes? "#776BC7" : "#5302de"}
                size={30}
                alignSelf="center"
                onPress={onToggleSwitch}                
            />}
          </StyledTitle>
      <SectionStyled>
        <ButtonGen title="Acceder" onPress={()=>validate(input)} textcolor={'#EDEDED'}/>
        <TextStyled onPress={() => setModalForgot(true)} style={{ color: "#999999"}} >¿Olvidaste tu contraseña?</TextStyled>
      </SectionStyled>
      <SectionStyled>
        <TextStyled style={{ color: "#999999" }}>¿No tienes una cuenta?</TextStyled>
        <ButtonGen title="Registrate" onPress={() => navigation.jumpTo('Registrarse')} textcolor={'#EDEDED'} />
      </SectionStyled>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <ModalContStyled>
          <ModalText>Usuario o contraseña incorrectos</ModalText>
          <ModalButtonStyled onPress={() => setModalVisible(false)}>
            <ButtonText>Aceptar</ButtonText>
          </ModalButtonStyled>
        </ModalContStyled>
      </Modal>
      <Modal animationType="fade" transparent={true} visible={modalForgot}>
        <ModalContStyled style={{height: "30%", bottom: "3%"}}>
          <ModalText>Ingrese su correo electronico</ModalText>
          <InputStyled value={mail} onChangeText={(ev)=>setMail(ev)} placeholder="Correo" placeholderTextColor='gray' keyboardType='email-address'/>
          <ModalButtonStyled onPress={() => forgotPass(mail)}>
            <ButtonText>Aceptar</ButtonText>
          </ModalButtonStyled>
        </ModalContStyled>
      </Modal>
    </ViewStyled>
  );
}