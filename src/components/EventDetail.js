import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import axios from "axios";
import styled from "styled-components/native";
import { backgroundColor } from "../services/theme.js";

const StyledView = styled.ScrollView`
  background-color: ${backgroundColor};
`;




const EventDetail = ({ navigation: { goBack } }) => {

    
  const [event, setEvent] = useState([]);

//   const getById = (item.id) => {
//     axios
//       .get("https://find-spot.herokuapp.com/event" + id)
//       .then((res) => {
//         return setEvent(res.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

  return (
    <>
      <StyledView>
        <View>
          <Text>{event.id}</Text>
          <Text>{event.text}</Text>
        </View>
        <Button onPress={() => goBack()} title="Volver" />
      </StyledView>
    </>
  );
};

export default EventDetail;
