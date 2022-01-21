import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components/native";
import Payment from "../components/Payments";
import { TextCardMedium, DetailInfo, GoBackButton } from "../generiComponents/GenericStyles";
import { backgroundColor, TextColor } from "../services/theme";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux"
import { useNavigation } from "@react-navigation/native";

export default function EventDetail({ navigation: { goBack }, route }) {
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
  
  const [event, setEvent] = useState([]);
  const modes = useSelector(state => state.darkModeReducer.darkMode);
  const actualUser = useSelector(state => state.authUserReducer.id);
  const eventUser = event.userId;
  const navigation = useNavigation();
  function eventEditor() {
    navigation.navigate('Home');
  }
  
   function eventDelete() {
    axios.post(`https://find-spot.herokuapp.com/event/deleteEvent`,{id:event.id})
      .then((res) => {
        return console.log("exito");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
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
            color={modes? '#EDEDED' : '#292929'}
            size={22}
            onPress={() => goBack()}
          />
        </GoBackButton>
        {eventUser === actualUser ? <GoBackButton>
          <MaterialCommunityIcons
            name="hardware-chip-outline"
            color={modes? '#EDEDED' : '#292929'}
            size={22}
            onPress={() => eventEditor()}
          />
        </GoBackButton> : <></>}
                {eventUser === actualUser ? <GoBackButton>
          <MaterialCommunityIcons
            name="close-circle-sharp"
            color={modes? '#EDEDED' : '#292929'}
            size={22}
            onPress={() => eventDelete()}
          />
        </GoBackButton>:<></>}
        <BottomContainer>
          <TextName>{event.name}</TextName>
          <TextCardMedium style={{bottom: "3%"}}>{event.description?.charAt(0).toUpperCase() + event.description?.slice(1)}</TextCardMedium>
          <DetailInfo>
            <TextCardMedium>
              <MaterialCommunityIcons
                name="location-outline"
                color={"#776BC7"}
                size={25}
              />{" "}
              {event.place?.charAt(0).toUpperCase() + event.place?.slice(1)}  {/*Este codigo capitaliza la primer letra*/}
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
          <Payment
            precio={event.price}
            evento={event.name}
            cantidad={5}
            fecha={event.date}
            hora={event.time}
          />
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
