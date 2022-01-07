import { useState } from 'react';
import ButtonGen from '../generiComponents/ButtonGen';
import { SectionStyled,TextStyled,ViewStyled,InputStyled,FormStyled,FormError,TitleStyled } from '../generiComponents/GenericStyles';
import axios from 'axios';

export default function Login() {
  const initialState = { //Estado inicial para usuarios
    email: "",
    password: "",
  };
  
  const [token, setToken] = useState("");
  const [input, setInput] = useState(initialState); //Crea el estado que contiene los datos
  const [errors,setErrors] = useState({});  //Crea el estado que contendrá los errores
  
  function loginUser(user){
      axios.post('https://find-spot.herokuapp.com/login',user) //Envia por post la a crear
        .then((res) => {setToken(res.data);})
        .catch((res)=>console.log(res));  
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
  
  function prueba() {
  console.log(token)
  }
  
  return (
    <ViewStyled>
      <TitleStyled>FindSpot</TitleStyled>
      <FormStyled>
        <InputStyled value={input.email} onChangeText={(ev)=>hadleInputChange("email",ev)} placeholder="Correo" placeholderTextColor='gray' keyboardType='email-address'/>
        {errors.email&&(<FormError>{errors.email}</FormError>)}
      </FormStyled>
      <FormStyled>
        <InputStyled value={input.password} onChangeText={(ev)=>hadleInputChange("password",ev)} placeholder="Contraseña" placeholderTextColor='gray' secureTextEntry/>
        {errors.password&&(<FormError>{errors.password}</FormError>)}
      </FormStyled>
      <SectionStyled>
        <ButtonGen title="Acceder" onPress={()=>validate(input)}/>
        <TextStyled style={{ color: "red" }} >Olvidaste tu contraseña</TextStyled>
      </SectionStyled>
      <SectionStyled>
        <TextStyled style={{ color: "#999999" }}>¿No tienes una cuenta?</TextStyled>
        <ButtonGen title="Registrate" onPress={ prueba} />
      </SectionStyled>
    </ViewStyled>
  );
}