import styled from 'styled-components/native';
import { backgroundColor } from '../services/theme';

export const TextStyled = styled.Text`
  font-size: 14px;
  text-align: center;
  margin:3% 0;
`;

export const ViewStyled = styled.View`
  height:100%;
  padding:10%;
  align-items:center;
  background-color:${backgroundColor};
`;

export const InputStyled = styled.TextInput`
  width:80%;
`;

export const FormStyled = styled.View`
  border-bottom-width:1px;
  border-bottom-color:#999999;
  margin:3% 0;
  width:100%;
  display:flex;
  flex-direction: row;
  align-items:center;
`;

export const FormError = styled.Text`            
    color:red;
    font-size:10px;
`;

export const TitleStyled = styled.Text`
  padding:15% 0 0 0;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

export const SectionStyled = styled.View`
  margin:15% 0;
  align-items:center;
`;

export const ChipStyled = styled.View`
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content:center;
`;

//Cami's css
export const StyledView = styled.View`
  height:550px;
  padding:15%;
  align-items:center;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.TextInput`
border-radius: 15px;
padding: 8px;
`;
