import styled from 'styled-components/native';
import { backgroundColor } from '../services/theme';
// import * as Font from "expo-font";

// export default useFonts = async () =>
//   await Font.loadAsync({
//     "ProximaNova": require('../../assets/Fonts/Proxima_Nova'),
//   });

// --violet-blue-crayola: #776bc7ff;
// --ultramarine: #5302deff;
// --plump-purple: #5641abff;
// --lavender-web: #e6e3f3ff;

export const TextCardBig = styled.Text`
textShadowColor:#776bc7ff;
textShadowRadius: 2;
  fontWeight:bold;
  font-size: 23px;
  text-align: center;
  margin:3% 0;
`;

export const TextCardMedium = styled.Text`
includeFontPadding:true;
text-align: auto;
  font-size: 14px;
  text-align: left;
`;

export const TextCardSmall = styled.Text`
fontWeight:600;
  font-size: 14px;
  text-align: left;
`;
export const DetailView = styled.View`
  borderColor: #5302deff;
`;

export const DetailInfo = styled.View`
 margin: 20px;
`


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
export const StyledView = styled.ScrollView`
  margin: 25px;
  border: 0.5px solid grey;
  padding: 15px;
  border-radius: 10px;
  padding-bottom: 10px;
`;

export const StyledInput = styled.TextInput`
border-radius: 15px;
border: 0.5px solid grey;
padding: 8px;
margin: 5px;
`;

export const StyledTitle = styled.Text`
font-weight: bold;
font-size: 23px;
margin: auto;
margin-bottom: 10px;
`

export const SmallerText = styled.Text`
font-weight: bold;
font-size: 17px;
margin: auto;
margin-top: 9px;
margin-bottom: 9px;
`

export const UploadPic = styled.Text`
color: #00a2dd
text-decoration: underline;
margin: auto;
margin-top: 5px;
margin-bottom: 15px;
font-size: 17px;
`
export const StyledButton = styled.TouchableOpacity`
  margin-bottom: 50px;
  background-color: #00a2dd;
  margin: auto;
  margin-bottom: 30px;
  border-radius: 10px;
  width: 260px;
  `

export const TextButton = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  padding: 9px;
`

export const Logo = styled.View`
  margin: auto;
  flex-direction: row;
  align-items: center; 
  margin-left: 58px;
`

export const SelectedDate = styled.Text`
border-radius: 15px;
border: 0.5px solid grey;
padding: 10px;
margin: 5px;
color: grey
`