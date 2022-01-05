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
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <ViewStyled>
      <TitleStyled>FindSpot</TitleStyled>
      <FormStyled>
        <InputStyled value={user} onChangeText={setUser} placeholder="Correo" placeholderTextColor='gray' />
      </FormStyled>
      <FormStyled>
        <InputStyled value={password} onChangeText={setPassword} placeholder="Contraseña" placeholderTextColor='gray' secureTextEntry/>
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