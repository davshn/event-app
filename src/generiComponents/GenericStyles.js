import styled from "styled-components/native";
import { backgroundColor, TextColor, InputColor, CartBorder } from "../services/theme";
import MapView from 'react-native-maps';

/* CSS HEX */
/*--violet-blue-crayola: #776bc7ff;
--plump-purple: #5641abff;
--rhythm: #817c99ff;
--silver-metallic: #ada9acff;
--cultured: #edededff;
--jet: #2b2b2bff;*/


//Event detail CSS
export const TextCardMedium = styled.Text`
  text-align: auto;
  font-size: 16px;
  text-align: left;
  margin-top: 2.5px;
  margin-bottom: 2.5px;
  color: ${TextColor};
`;

export const DetailInfo = styled.View`
  margin: 5%;
  justify-content: space-evenly;
  height: 40%;
  bottom: 1%
`;

export const GoBackButton = styled.View`
  background-color: ${backgroundColor};
  height: 4%;
  width: 8%;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-top: 5%;
  margin-left: 80%;
`
export const GoBackButton2 = styled.View`
  background-color: ${backgroundColor};
  width: 12%;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-top: 5%;
  position: absolute;
  left: 88%;
  height: 45%;
  bottom: 50%;
  `


export const TextStyled = styled.Text`
  font-size: 14px;
  text-align: center;
  margin: 3% 0;
  color: ${TextColor};
  text-decoration: underline;
`;

export const ViewStyled = styled.ScrollView`
  padding: 6%;
  padding-bottom:20px;
  background-color:${backgroundColor};
`; 

export const InputStyled = styled.TextInput`
  border-radius: 15px;
  border: 0.5px solid grey;
  padding: 8px;
  margin: 5px;
  width: 90%;
  align-self: center;
  color:${TextColor};
`;

export const FormError = styled.Text`
  color: red;
  font-size: 10px;
  padding-left: 8%;
`;

export const TitleStyled = styled.Text`
  padding: 15% 0 0 0;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: ${TextColor};
`;

export const SectionStyled = styled.View`
  margin: 15% 0;
  align-items: center;
`;

export const ChipStyled = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
`;

//Form CSS
export const StyledView = styled.ScrollView`
  margin: 6%;
  border: 0.5px solid grey;
  padding: 4%;
  border-radius: 10px;
  padding-bottom: 10px;
  background-color:${backgroundColor};
`;

export const StyledView2 = styled.View`
  align-items: center;
`

export const StyledInput = styled.TextInput`
  border-radius: 15px;
  border: 0.5px solid grey;
  padding: 8px;
  margin: 5px;
  width: 80%;
  color: ${TextColor};
`;

export const StyledTitle = styled.Text`
  font-weight: bold;
  font-size: 23px;
  margin: auto;
  margin-bottom: 10px;
  color: ${TextColor};
`;

export const SmallerText = styled.Text`
  font-weight: bold;
  font-size: 17px;
  margin: auto;
  margin-top: 9px;
  margin-bottom: 9px;
  color: ${TextColor};
`;

export const UploadPic = styled.Text`
  color: #5641abff;
  text-decoration: underline;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 17px;
`;

export const TermsModal = styled.View`
  align-items:center;
  justify-content:space-evenly;
  height: 90%;
  margin: 10%;
  padding: 8%;
  background-color:${backgroundColor};
  border-radius:10px;
  border: 1.5px solid #776BC7;
`

export const TermsText = styled.Text`
  color: #5641abff;
  text-decoration: underline;
`

export const StyledButton = styled.TouchableOpacity`
  background-color: #776BC7;
  margin: auto;
  margin-bottom: 30px;
  border-radius: 10px;
  width: 88%;
  padding: 1%
`;

export const TextButton = styled.Text`
  color: #EDEDED;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  padding: 9px;
`;

export const AgregarFotoButton = styled.TouchableOpacity`
  background-color: #776BC7;
  margin: auto;
  margin-top: 7%;
  margin-bottom: 5%;
  border-radius: 10px;
  width: 88%;
  color: #EDEDED;
`;

export const ProfilePic = styled.Image`
  width: 150px;
  border-radius: 100px;
  height: 150px;
  margin: 7%;
  align-self: center;
`

//Logo CSS -- NO CAMBIAR
export const Logo = styled.View`
  margin: auto;
  flex-direction: row;
  align-items: center;
`;

export const StyledText = styled.Text`
  color: ${TextColor};
`

export const SelectedDate = styled.Text`
  border-radius: 15px;
  border: 0.5px solid grey;
  padding: 10px;
  margin: 5px;
  color: grey;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${backgroundColor};
  margin: 10px;
`; 

export const Input = styled.TextInput`
  border-radius: 15px;
  padding: 10px;
  border: 0.5mm solid rgb(209, 209, 209);
  width: 240px;
  height: 40px;
  border: 1px solid ${InputColor};
`;

export const FilterButton = styled.TouchableOpacity`
  border-radius: 15px;
  border: 0.5px solid grey;
  padding: 10px;
  color: grey;
  margin-left: 2px;
`;

export const EventItem = styled.View`
  border: 1px solid #776BC7;
  background-color: ${backgroundColor};
  margin-bottom: 4%;
`;

export const EventItemContainer = styled.TouchableOpacity`
background-color:${backgroundColor};
width: 100%;

`

export const EventImage = styled.Image`
  width: 100%;
  height: 175px;
  margin: auto;
`;

export const CardInfo = styled.View`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const CardInfoText = styled.Text`
  font-size: 19px;
  margin-left: 4%;
  font-weight: bold;
  color: ${TextColor};
`;

// Explorar CSS
export const StyledMap = styled(MapView)`
  width:900px;
  height:670px;
`;

export const MapViewContainer = styled.ScrollView`
  background-color: ${backgroundColor};
`;
export const ViewBackground = styled.View`
  background-color: ${backgroundColor};
`;

export const SearchbarView = styled.View`
background-color: ${backgroundColor};
  display: flex;
  flex-direction: row;
  height: 11%;
  justify-content: center;
  padding-bottom: 1%;
`;

export const InicioFilterButton = styled.TouchableOpacity`
  background-color: ${backgroundColor};
  border-radius: 10px;
  top: 10%;
  padding: 1%;
  padding-top: 2%;
  width: 25%;
  height: 70%;
  margin: 1%;
  border: 1.5px solid #776BC7;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`;

export const InicioSearchInput = styled.TextInput`
  background-color: ${backgroundColor};
  border-radius: 10px;
  border: 1.5px solid #776BC7;
  padding-left: 2%;
  margin: 1%;
  width: 65%;
  height: 70%;
  align-self: center;
`;
export const InicioButtonText = styled.Text`
  color: ${TextColor};
  text-align: center;
  margin-top: 4%;
`;

export const HeaderStyle = styled.View`
  background-color: ${backgroundColor};
  flex: 0.4;
  padding: 2%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px #776bc7ff;
  elevation: 2;
`// 

export const ItemContainer = styled.View`
  background-color: ${backgroundColor};
  elevation: 5;
`
export const Title = styled.Text`
  font-size: 16px;
  color: ${TextColor};
`

export const CartImage = styled.Image`
  width: 15%;
	height: 80%;
	margin-vertical: 3%;
	margin-horizontal: 2.2%; 
  border-radius: 10px;
  align-self: center; 
`

export const Counter = styled.View`
  flex: 1px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const FooterStyled = styled.View`
  flex: 1px;
  padding-right: 4%;
  padding-left: 4%;
  border: 1px ${CartBorder};
`

export const CartText = styled.Text`
  color: ${TextColor};
`
export const RowViews = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
  export const BorrarCarrito = styled.View`
  background-color: ${backgroundColor};
  padding: 3%;
  border-radius: 10px;
`

  // *pagarbutton
  // const styles3 = {         
  //   checkoutButtonStyle: {
  //     textcolor: '#EDEDED',
  //     backgroundColor: '#776BC7',
  //     padding: 10,
  //     paddingRight: 60,
  //     paddingLeft: 60,
  //     borderRadius: 10,
  //   }
  // };

  export const OptionsView = styled.View`
  width: 90%;
  border: 1px solid #776BC7;
  align-self: center;
  border-radius: 10px;
  margin-vertical: 1%;
  padding: 4%
`;
