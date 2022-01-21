import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components/native";
import Payment from "../components/Payments";
import {
  TextCardMedium,
  DetailInfo,
  GoBackButton,
  StyledButton,
  TextButton,
} from "../generiComponents/GenericStyles";
import { backgroundColor, TextColor } from "../services/theme";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "../stateManagement/actions/cartActions"

export default function EventDetail({ navigation: { goBack }, route }) {
  const dispatch = useDispatch();
  const [event, setEvent] = useState([]);
  let { id } = route.params.item;
  const modes = useSelector(state => state.darkModeReducer.darkMode);
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

  const tags = event.categories?.map((el) => (
    <TextCardMedium key={el.eventcategory.categoryId}>
      <MaterialCommunityIcons
        name="pricetag-outline"
        color={"#776BC7"}
        size={20}
      />{" "}
      {el.name}{" "}
    </TextCardMedium>
  ));

  const handleAddToCart = (e) =>{
    e.preventDefault();
    const cartEvent = event;
    cartEvent.counter = 1;
    dispatch(addToCart(cartEvent));
  }

  return (
    <>
      <ContainerImg style={{ backgroundColor: "#5641abff" }}>
        <BgImage
          source={{
            uri:
              event.eventPic ||
              "https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg",
          }}
        />
        <GoBackButton>
          <MaterialCommunityIcons
            name="chevron-down-outline"
            color={modes ? "#EDEDED" : "#292929"}
            size={22}
            onPress={() => goBack()}
          />
        </GoBackButton>
        <BottomContainer>
          <TextName>{event.name}</TextName>
          <TextCardMedium style={{ bottom: "3%" }}>
            {event.description?.charAt(0).toUpperCase() +
              event.description?.slice(1)}
          </TextCardMedium>
          <DetailInfo>
            <TextCardMedium>
              <MaterialCommunityIcons
                name="location-outline"
                color={"#776BC7"}
                size={25}
              />{" "}
              {event.place?.charAt(0).toUpperCase() + event.place?.slice(1)}{" "}
              {/*Este codigo capitaliza la primer letra*/}
            </TextCardMedium>
            <TextCardMedium>
              <MaterialCommunityIcons
                name="time-outline"
                color={"#776BC7"}
                size={25}
              />{" "}
              {event.time}
            </TextCardMedium>
            <TextCardMedium>
              <MaterialCommunityIcons
                name="calendar-outline"
                color={"#776BC7"}
                size={25}
              />{" "}
              {event.date}
            </TextCardMedium>
            <TextCardMedium>
              <MaterialCommunityIcons
                name="logo-usd"
                color={"#776BC7"}
                size={25}
              />{" "}
              {event.price}
            </TextCardMedium>
            <TextCardMedium>
              <MaterialCommunityIcons
                name="person-circle-outline"
                color={"#776BC7"}
                size={25}
              />{" "}
              {event.user?.name}
            </TextCardMedium>
            <TextCardMedium>{tags}</TextCardMedium>
          </DetailInfo>

          <StyledButton
            style={{ marginTop: "4%", backgroundColor: "#121212" }}
            onPress={e=>handleAddToCart(e)}//navigate to shopping cart 
          >
            <TextButton style={{ color: "#EDEDED" }}>
              Agregar al carrito
            </TextButton>
          </StyledButton>

        </BottomContainer>
      </ContainerImg>
    </>
  );
}

const ContainerImg = styled.View`
  flex: 1;
  align-items: center;
`;

const BgImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 30%;
  margin-top: 0px;
`;

const BottomContainer = styled.View`
  margin-top: 23%;
  height: 90%;
  width: 101%;
  background-color: ${backgroundColor};
  border-radius: 60px;
  align-items: center;
`;

const TextName = styled.Text`
margin-top: 25%;
font-weight: bold;
font-size: 28px;
bottom: 8%;
color: ${TextColor};
`;
