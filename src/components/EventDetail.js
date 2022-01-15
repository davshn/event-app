import { useState, useEffect } from "react";
import { Text, Button ,View} from "react-native";
import axios from "axios";
import styled from "styled-components/native";
import { backgroundColor } from "../services/theme.js";
import Payment from '../components/Payments';
import {
  TextCardBig,
  TextCardMedium,
  TextCardSmall,
  DetailView,
  DetailInfo,
  StyledButton,
  TextButton,
  ViewBackground
} from "../generiComponents/GenericStyles";

const EventDetail = ({ navigation: { goBack }, route }) => {
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

  return (
      <ViewBackground style={{paddingBottom: 30}}>
        <DetailView style={{height: "95%"}}>
          <ImageDetail
            source={{
              uri: event.eventPic || "https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg",
            }}
          />
          <TextCardBig>{event.name}</TextCardBig>
          <DetailInfo>
            <TextCardSmall>Descripción : {event.description}</TextCardSmall>
            <TextCardMedium>Lugar: {event.place}</TextCardMedium>
            <TextCardSmall>Hora: {event.time}</TextCardSmall>
            <TextCardSmall>Fecha: {event.date}</TextCardSmall>
            <TextCardMedium>Rating : {event.rating}</TextCardMedium>
            <TextCardMedium>$ {event.price}</TextCardMedium>
            <TextCardMedium>Creado por : {event.creators}</TextCardMedium>
          </DetailInfo>

          <View
            style={{
              margin: '20%',
             fontWeight: 'bold',
            }}
          >
            <Payment />
          </View>

          <StyledButton onPress={() => goBack()}>
            <TextButton>Volver</TextButton>
          </StyledButton>
        </DetailView>
      </ViewBackground>
  );
};

const ImageDetail = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 15px;
`;

const NameDetail = styled.Text`
  font-weight: bold;
`;

export default EventDetail;
