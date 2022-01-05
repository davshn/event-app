import styled from 'styled-components/native';
import { useState } from 'react';
import ButtonGen from './ButtonGen';

const TitleStyled = styled.Text`
  padding:15% 0 0 0;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

const TextStyled = styled.Text`
  font-size: 14px;
  text-align: center;
  margin:5%;
`;
const ViewStyled = styled.View`
  height:100%;
  padding:15%;
  align-items:center;
`;

const InputStyled = styled.TextInput`
  width:80%;
`;

const FormStyled = styled.View`
  border-bottom-width:1px;
  border-bottom-color:#999999;
  margin:5% 0;
  width:100%;
  display:flex;
  flex-direction: row;
  align-items:center;
`;

const SectionStyled = styled.View`
  margin:15% 0;
  align-items:center;
`

export default function Login() {
  const initialState={ //Estado inicial para usuarios
    mail:"",
    password:"",
  }
  
  const [input, setInput] = useState(initialState); //Crea el estado que contiene los datos
  const [errors,setErrors]=useState({});  //Crea el estado que contendrá los errores
  
  function hadleInputChange(prop,e) {               //Cuando se digita lo guarda en el estado
    setInput(prev => ({ ...prev, [prop]: e }))
  }
  
  return (
    <ViewStyled>
      <TitleStyled>FindSpot</TitleStyled>
      <FormStyled>
        <InputStyled value={input.mail} onChangeText={(ev)=>hadleInputChange("mail",ev)} placeholder="Correo" placeholderTextColor='gray' keyboardType='email-address'/>
      </FormStyled>
      <FormStyled>
        <InputStyled value={input.password} onChangeText={(ev)=>hadleInputChange("password",ev)} placeholder="Contraseña" placeholderTextColor='gray' secureTextEntry/>
      </FormStyled>
      <SectionStyled>
        <ButtonGen title="Acceder" />
        <TextStyled style={{ color: "red" }} >Olvidaste tu contraseña</TextStyled>
      </SectionStyled>
      <SectionStyled>
        <TextStyled style={{ color: "#999999" }}>¿No tienes una cuenta?</TextStyled>
        <ButtonGen title="Registrate" />
      </SectionStyled>
    </ViewStyled>
  );
}