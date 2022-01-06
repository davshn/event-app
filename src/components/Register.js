import { useState } from 'react';
import ButtonGen from '../generiComponents/ButtonGen';
import { TextStyled,ViewStyled,InputStyled,FormStyled,FormError } from '../generiComponents/GenericStyles';

export default function Register() {
  const initialState = { //Estado inicial para usuarios
    name: "",
    mail: "",
    password: "",
  };
  const [input, setInput] = useState(initialState); //Crea el estado que contiene los datos
  const [errors, setErrors] = useState(initialState);  //Crea el estado que contendrá los errores
  
  function hadleInputChange(input,e) {               //Cuando se digita lo guarda en el estado
    setInput(prev => ({ ...prev, [input]: e }))
  };
  
  function validate(input) {
    let error={};       //Guarda temporalmente los errores encontrados
    if (!input.name) { error.name = "Requerido" }
    else if(!(/^[a-z ,.'-]+$/i).test(input.name)){error.name="Nombre invalido"};
    if (!input.mail) { error.mail = "Requerido" }
    else if(!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i).test(input.mail)){error.mail="Correo invalido"};
    if (!input.password) { error.password = "Requerido" }
    else if(!(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i).test(input.password)){error.password="Contraseña insegura"};
    return error
  };
  
  return (
    <ViewStyled>
      <FormStyled>
        <InputStyled value={input.name} onChangeText={(ev)=>hadleInputChange("name",ev)} placeholder="Nombre completo" placeholderTextColor='gray' />
        <FormError>{errors.name}</FormError>
      </FormStyled>
      <FormStyled>
        <InputStyled value={input.mail} onChangeText={(ev)=>hadleInputChange("mail",ev)} placeholder="Correo" placeholderTextColor='gray' keyboardType='email-address'/>
        <FormError>{errors.mail}</FormError>
      </FormStyled>
      <FormStyled>
        <InputStyled value={input.password} onChangeText={(ev)=>hadleInputChange("password",ev)} placeholder="Contraseña" placeholderTextColor='gray' secureTextEntry/>
        <FormError>{errors.password}</FormError>
      </FormStyled>
      <TextStyled>Fecha nacimiento</TextStyled>
      <TextStyled>Foto perfil</TextStyled>
      <TextStyled>Terminos y condiciones</TextStyled>
      <ButtonGen title="intereses" />
        <ButtonGen title="Enviar" onPress={()=>setErrors(validate(input))}/>
    </ViewStyled>
  );
}