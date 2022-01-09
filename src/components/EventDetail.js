import { useState, useEffect } from "react";
import { View, Text, Button,Image } from "react-native";
import axios from "axios";
import styled from "styled-components/native";
import { backgroundColor } from "../services/theme.js";
import {TextStyled} from '../generiComponents/GenericStyles';

const StyledView = styled.ScrollView`
  background-color: ${backgroundColor};
`;

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
    <>
      <StyledView>
        <View>
          <ImageDetail
            source={{
              uri: "https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg",
            }}
          />
         
          <Text>Descripción : {event.description}</Text>
           <Text>{event.place}</Text>
          <Text>{event.time}</Text>
          <Text>{event.date}</Text>
          <Text>{event.rating}</Text>
          <Text>{event.price}</Text>
          <Text>{event.creators}</Text>
        </View>
        <Button onPress={() => goBack()} title="Volver" />
      </StyledView>
    </>
  );
};

const ImageDetail = styled.Image`
  width: 100%;
  height: 200;
`;

const NameDetail = styled.Text`
   font-weight: bold;
`

export default EventDetail





