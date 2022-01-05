import styled from 'styled-components/native';
import { useState } from 'react';
import ButtonGen from './ButtonGen';

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

export default function Register() {
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <ViewStyled>
      <FormStyled>
        <InputStyled value={name} onChangeText={setName} placeholder="Nombre completo" placeholderTextColor='gray' />
      </FormStyled>
      <FormStyled>
        <InputStyled value={mail} onChangeText={setMail} placeholder="Correo" placeholderTextColor='gray' />
      </FormStyled>
      <FormStyled>
        <InputStyled value={password} onChangeText={setPassword} placeholder="Contraseña" placeholderTextColor='gray' secureTextEntry/>
      </FormStyled>
      <TextStyled>Fecha nacimiento</TextStyled>
      <TextStyled>Foto perfil</TextStyled>
      <TextStyled>Terminos y condiciones</TextStyled>
      <ButtonGen title="intereses" />
        <ButtonGen title="Enviar" />
    </ViewStyled>
  );
}