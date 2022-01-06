import { useState } from 'react';
import ButtonGen from '../generiComponents/ButtonGen';
import { SectionStyled,TextStyled,ViewStyled,InputStyled,FormStyled,FormError,TitleStyled } from '../generiComponents/GenericStyles';

export default function Login() {
  const initialState = { //Estado inicial para usuarios
    mail: "",
    password: "",
  };
  const [input, setInput] = useState(initialState); //Crea el estado que contiene los datos
  const [errors,setErrors] = useState(initialState);  //Crea el estado que contendrá los errores
   
  function validate(input) {
    let error={};       //Guarda temporalmente los errores encontrados
    if(!input.mail){error.mail="Requerido"}
    else if(!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i).test(input.mail)){error.mail="Correo invalido"};
    if (!input.password) { error.password = "Requerido" };
    return error
  };
  
  function hadleInputChange(input,e) {               //Cuando se digita lo guarda en el estado
    setInput(prev => ({ ...prev, [input]: e }))
  };
  
  return (
    <ViewStyled>
      <TitleStyled>FindSpot</TitleStyled>
      <FormStyled>
        <InputStyled value={input.mail} onChangeText={(ev)=>hadleInputChange("mail",ev)} placeholder="Correo" placeholderTextColor='gray' keyboardType='email-address'/>
        <FormError>{errors.mail}</FormError>
      </FormStyled>
      <FormStyled>
        <InputStyled value={input.password} onChangeText={(ev)=>hadleInputChange("password",ev)} placeholder="Contraseña" placeholderTextColor='gray' secureTextEntry/>
        <FormError>{errors.password}</FormError>
      </FormStyled>
      <SectionStyled>
        <ButtonGen title="Acceder" onPress={()=>setErrors(validate(input))}/>
        <TextStyled style={{ color: "red" }} >Olvidaste tu contraseña</TextStyled>
      </SectionStyled>
      <SectionStyled>
        <TextStyled style={{ color: "#999999" }}>¿No tienes una cuenta?</TextStyled>
        <ButtonGen title="Registrate" />
      </SectionStyled>
    </ViewStyled>
  );
}