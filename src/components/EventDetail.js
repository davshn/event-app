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
import {addToCart} from "../stateManagement/actions/cartUpdates"
import { useDispatch, useSelector } from "react-redux";

export default function EventDetail({ navigation: { goBack }, route }) {
  //eventos del estado local 
  const [event, setEvent] = useState([]);

  const dispatch = useDispatch();

  




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

  function addToCartDispatch(event) {
    dispatch(addToCart(event));

  };

  return (
    <ViewBackground style={{ paddingBottom: 30 }}>
      <DetailView style={{ height: "95%" }}>
        <ImageDetail
          source={{
            uri:
              event.eventPic ||
              "https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg",
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

        {/* <Payment
          precio={event.price}
        
          evento={event.name}
          cantidad={5}
          fecha={event.date}
          hora={event.time}
        /> */}
        <StyledButton onPress={() => goBack()}>
          <TextButton>Volver</TextButton>
        </StyledButton>

    
        <StyledButton onPress={() => addToCartDispatch(event)}>
          <TextButton>Agregar al carrito</TextButton>
        </StyledButton>



        
      </DetailView>
    </ViewBackground>
  );
}

const ImageDetail = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 15px;
`;

const NameDetail = styled.Text`
  font-weight: bold;
`;
