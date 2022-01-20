import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components/native";
import Payment from "../components/Payments";
import {
  TextCardBig,
  TextCardMedium,
  TextCardSmall,
  DetailView,
  DetailInfo,
  StyledButton,
  TextButton,
  ViewBackground,
} from "../generiComponents/GenericStyles";
import { backgroundColor, TextColor } from "../services/theme";
import { Text, View, ScrollView, Button } from "react-native"

export default function EventDetail({ navigation: { goBack }, route }) {
  const [event, setEvent] = useState([]);

  let { id } = route.params.item;

  useEffect(() => getById(id), []);

  const getById = (id) => {
    axios
      .get(`https://find-spot.herokuapp.com/event/${id}`)
      .then((res) => {
        return setEvent(res.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // esto fue una prueba, y ya renderiza las categorias
  // cambiar el <TextCardMedium> por uno personalizado aca abajo para darle estilo y ver si aparecen por separado
  const tags = event.categories?.map(el => <TextCardMedium key={el.eventcategory.categoryId}>{el.name}</TextCardMedium> )

//   return (
//     <ViewBackground style={{ paddingBottom: 30 }}>
//       <DetailView style={{ height: "95%" }}>
//         <ImageDetail
//           source={{
//             uri:
//               event.eventPic ||
//               "https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg",
//           }}
//         />
//         <TextCardBig>{event.name}</TextCardBig>
//         <DetailInfo>
//           <TextCardMedium>{tags}</TextCardMedium>
//           <TextCardSmall>Descripción : {event.description}</TextCardSmall>
//           <TextCardMedium>Lugar: {event.place}</TextCardMedium>
//           <TextCardSmall>Hora: {event.time}</TextCardSmall>
//           <TextCardSmall>Fecha: {event.date}</TextCardSmall>
//           <TextCardMedium>$ {event.price}</TextCardMedium>
//           <TextCardMedium>Creado por : {event.user?.name}</TextCardMedium>
//         </DetailInfo>

//         <Payment
//           precio={event.price}
        
//           evento={event.name}
//           cantidad={5}
//           fecha={event.date}
//           hora={event.time}
//         />

//         <StyledButton onPress={() => goBack()}>
//           <TextButton>Volver</TextButton>
//         </StyledButton>
//       </DetailView>
//     </ViewBackground>
//   );
// }
return (
  <StyledView>
    <ContainerImg style={{backgroundColor: "#5641abff"}} >
    <View style={{position: "absolute", backgroundColor: "orange", height: "10%", width: "10%"}} onPress={() => goBack()}>
      </View>
      <BgImage
         source={{
          uri:
            event.eventPic ||
            "https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg",
        }}
      />
      

      <BottomContainer>
        <TextName>{event.name}</TextName>
        <Text style={{ color: "grey", bottom: "7%" }}>{event.place}</Text>
        <View>
        <DetailInfo>
          <TextCardMedium>{tags}</TextCardMedium>
          <TextCardSmall>Descripción : {event.description}</TextCardSmall>
          <TextCardMedium>Lugar: {event.place}</TextCardMedium>
          <TextCardSmall>Hora: {event.time}</TextCardSmall>
          <TextCardSmall>Fecha: {event.date}</TextCardSmall>
          <TextCardMedium>$ {event.price}</TextCardMedium>
          <TextCardMedium>Creado por : {event.user?.name}</TextCardMedium>
        </DetailInfo>
        </View>
        
          <Payment
            precio={event.price}
          
            evento={event.name}
            cantidad={5}
            fecha={event.date}
            hora={event.time}
          />
          <Button title="volver" onPress={() => goBack()}/>
           <StyledButton >
            <TextButton>Volver</TextButton>        
          </StyledButton>
         
      </BottomContainer>
    </ContainerImg>
  </StyledView>
);
}

const ContainerImg = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;
const BgImage = styled.Image`
position: absolute;
width: 100%;
height: 100%;
justify-content: center;
`;

const BottomContainer = styled.View`
margin-top: 72%;
height: 90%;
width: 400px;
background-color: ${backgroundColor};
border-radius: 70px;
align-items: center;
`;

const StyledView = styled.ScrollView`
  background-color: ${backgroundColor};
`;
const TextName = styled.Text`
margin-top: 30%
font-weight: bold;
font-size: 23px;
bottom: 8%;
color: ${TextColor};
`;
const ImageDetail = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 15px;
`;

const NameDetail = styled.Text`
  font-weight: bold;
`;
