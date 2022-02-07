import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components/native";
import {
  TextCardMedium,
  DetailInfo,
  GoBackButton,
  StyledButton,
  TextButton,
  MapViewContainer,
} from "../generiComponents/GenericStyles";
import { backgroundColor, TextColor } from "../services/theme";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { addToCart } from "../stateManagement/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { searchByFilters } from "../stateManagement/actions/getEventsActions";
import {
  ModalContStyled,
  ModalText,
  ModalButtonStyled,
  ButtonText,
} from "../generiComponents/ModalGen";
import { Modal, View } from "react-native";
import Loading from "./Loading";

const initialState = {
  //Estado inicial para usuarios
  name: "",
  initialPrice: "",
  finalPrice: "",
  initialDate: "",
  finalDate: "",
  type: "",
  sortType: "",
};
export default function EventDetail({ navigation: { goBack }, route }) {
  let { id } = route.params.item;
  useEffect(() => getById(id), []);
  const dispatch = useDispatch();
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
  const [modal, setModal] = useState(false);

  const modes = useSelector((state) => state.darkModeReducer.darkMode);
  const actualUser = useSelector((state) => state.authUserReducer.id);
  const eventUser = event.userId;
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false); //Controla el modal
  function eventEditor() {
    const item = route.params.item;
    navigation.navigate("EditEvent", { item: item });
  }

  function deleteModal() {
    setModalVisible(true);
  }

  function eventDelete() {
    axios
      .post(`https://find-spot.herokuapp.com/events/deleteEvent`, {
        id: event.id,
      })
      .then((res) => {
        dispatch(searchByFilters(initialState));
        goBack();
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

  const handleAddToCart = (e) => {
    e.preventDefault();
    const cartEvent = event;
    cartEvent.counter = 1;
    dispatch(addToCart(cartEvent));
    setModal(true);
  };

  if (event.length === 0) return (<Loading></Loading>) 

  return (
    <MapViewContainer>
      <ContainerImg style={{ backgroundColor: "#5641abff" }}>
        <BgImage
          source={{
            uri:
              event.eventPic ||
              "https://i.pinimg.com/564x/55/05/b7/5505b700ffbba3f9190799cb0c532535.jpg",
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
              {event.time?.slice(0,5)} hs.
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
                name="clipboard-outline"
                color={"#776BC7"}
                size={25}
              />{" "}
              {event.availableStock + " entradas disponibles"}
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

		  {eventUser === actualUser ? <></> : (
          <StyledButton
            style={{
              marginTop: "4%",
              backgroundColor: "#121212",
              width: "70%",
            }}
            onPress={(e) => handleAddToCart(e)}
          >
            <TextButton style={{ color: "#EDEDED" }}>
              Agregar al carrito
            </TextButton>
          </StyledButton>)}

          {eventUser === actualUser ? (
			  <StyledButton
			  style={{
				marginBottom: "1%",
				marginTop: "4%",
				backgroundColor: "#121212",
				width: "70%",
			  }}
			  onPress={() => eventEditor()}
			>
			  <TextButton style={{ color: "#EDEDED" }}>
			  <MaterialCommunityIcons
              name="create-outline"
              color={modes ? "#EDEDED" : "#292929"}
              size={22}
            />  Editar evento
			  </TextButton>
			</StyledButton>
          ) : (
            <></>
          )}
          {eventUser === actualUser ? (
			  <StyledButton
			  style={{
				marginTop: "1%",
				backgroundColor: "#121212",
				width: "70%",
			  }}
			  onPress={() => deleteModal()}
			>
			  <TextButton style={{ color: "#EDEDED" }}>
			  <MaterialCommunityIcons
              name="trash-bin"
              color={modes ? "#EDEDED" : "#292929"}
              size={22}
            />  Eliminar evento
			  </TextButton>
			</StyledButton>
           
          ) : (
            <></>
          )}
        </BottomContainer>
      </ContainerImg>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <ModalContStyled>
          <ModalText>¿Deseas eliminar el evento de forma permanente?</ModalText>
		  <View style={{flexDirection: "row"}}>
			  <ModalButtonStyled onPress={() => eventDelete()}>
            <ButtonText>Aceptar</ButtonText>
          </ModalButtonStyled>
          <ModalButtonStyled onPress={() => setModalVisible(false)}>
            <ButtonText>Cancelar</ButtonText>
          </ModalButtonStyled>
		  </View>
        </ModalContStyled>
      </Modal>

      <Modal animationType="slide" transparent={true} visible={modal}>
        <ModalContStyled>
          <ModalText>Evento agregado al carrito</ModalText>
          <ModalButtonStyled onPress={() => setModal(false)}>
            <ButtonText>Aceptar</ButtonText>
          </ModalButtonStyled>
        </ModalContStyled>
      </Modal>
    </MapViewContainer>
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
  padding-bottom: 60px;
`;

const TextName = styled.Text`
  margin-top: 25%;
  font-weight: bold;
  font-size: 28px;
  bottom: 8%;
  color: ${TextColor};
`;
