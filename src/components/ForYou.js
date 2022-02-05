import { backgroundColor, TextColor } from "../services/theme.js";
import React, { useEffect } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { searchByFilters } from "../stateManagement/actions/getEventsActions";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { MyComponent } from "./ForYouCard.js";
import { useNavigation } from "@react-navigation/native";
import { setInterests } from "../stateManagement/actions/authUserActions";
import Axios from "axios";

export default function ForYou() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.getEventsReducer.events);
  const user = useSelector((state) => state.authUserReducer);
  const interests = useSelector((state) => state.authUserReducer.interests);
  const navigation = useNavigation();

  function getInterests(id) {
    Axios.get("https://find-spot.herokuapp.com/register/users").then(
      (responses) => {
        let user = responses.data.filter((user) => user.id === id);
        dispatch(setInterests(user[0].categories));
      }
    );
  }

  function filteredEvents(x) {
    let events = x.map((e) => {
      return {
        ...e,
        categories: e.categories.map((c) => c.name),
      };
    });
    let result = interests?.map((i) => {
      return events.filter((e) => e.categories.includes(i));
    });
    // result es un array con varios array con 1 objeto c/u. Abajo le aplico .flat(2) para sacarle los array y que mande bien la info
    if (result){
      let newResult = result.flat(2)
      let set = new Set( newResult.map( JSON.stringify ) ) //el set es para eliminar duplicados
      let arrSinDuplicaciones = Array.from( set ).map( JSON.parse );
      return arrSinDuplicaciones
    } 
    else return undefined
  }
  var filterEvents = filteredEvents(events)

  useEffect(() => {
    getInterests(user.id);
    dispatch(searchByFilters());
  }, []);

  function userEditor() {
    navigation.navigate("UserUpdate");
  }

  return (
    <StyledView>
      <ContainerImg style={{ backgroundColor: "#5641abff" }}>
        <BgImage
          source={{
            uri: "https://images.unsplash.com/photo-1516889782132-fb580815f8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80https://images.unsplash.com/photo-1516889782132-fb580815f8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          }}
        />
        <BottomContainer>
          <ProfileImg
            source={{
              uri:
                user.profilePick ||
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            }}
            style={{ bottom: "11%" }}
          />
          <View
            style={{
              bottom: "14%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextName>{user.name} </TextName>
            {user.verifyed ? (
              <MaterialCommunityIcons
                name="checkmark-circle"
                color="#449CF1"
                size={22}
              />
            ) : (
              <></>
            )}
          </View>
          <View
            style={{
              flexDirection: "row",
              bottom: "8.5%",
              width: "90%",
              justifyContent: "center",
            }}
          >
            {interests ? interests.map((i, x) => (
              <Text key={x} style={{ color: "#776BC7" }}>
                {" "}
                <MaterialCommunityIcons
                  name="pricetag-outline"
                  color={"#776BC7"}
                  size={15}
                />{" "}
                {i}
              </Text>
            )) : <></>}
          </View>

          <OptionsView onPress={() => navigation.navigate("ListadoTickets")} style={{ bottom: "4%" }}>
            <MaterialCommunityIcons
              name="receipt"
              color={"#776BC7"}
              size={22}
            />
            <StyledText> Entradas compradas</StyledText>
          </OptionsView>
          {user.logged ? (
            <OptionsView onPress={() => userEditor()} style={{ bottom: "4%" }}>
              <MaterialCommunityIcons
                name="settings-outline"
                color={"#776BC7"}
                size={22}
                onPress={() => userEditor()}
              />
              <StyledText>
                {" "}
                Editar perfil
              </StyledText>
            </OptionsView>
          ) : (
            <></>
          )}
          {filterEvents ? (
            <>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "75%",
                }}
              >
                <StyledText style={{ right: "100%", fontSize: 18 }}>
                  Eventos para ti
                </StyledText>
                {/* <Text style={{ color: "#6d6a7f" }}>See All</Text> */}
              </View>
              <ScrollView
                style={{
                  top: 8,
                  width: "95%",
                  height: 10,
                  marginLeft: "13%",
                  marginRight: "10%",
                  marginBottom: "10%",
                  bottom: 93,
                }}
                horizontal
              >
                {filterEvents.map((e, x) => {
                  return(
                    <TouchableOpacity key={x} onPress={() => navigation.navigate("Detail", { item: e })}>
                      <MyComponent
                        name={e.name}
                        date={e.date}
                        time={e.time.slice(0,5)}
                        pic={e.eventPic}
                        price={e.price}
                      />
                    </TouchableOpacity> 
                )})}
              </ScrollView>
            </>
          ) : (
            <></>
          )}
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
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const BottomContainer = styled.View`
  margin-top: 62%;
  height: 100%;
  width: 100%;
  background-color: ${backgroundColor};
  border-radius: 50px;
  align-items: center;
  padding-bottom: 26%;
`;

const StyledView = styled.ScrollView`
  background-color: ${backgroundColor};
`;
const ProfileImg = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 25px;
  bottom: 10%;
`;
const TextName = styled.Text`
  font-weight: bold;
  font-size: 23px;
  color: ${TextColor};
`;

const StyledText = styled.Text`
  color: ${TextColor};
  font-size: 15px;
  font-weight: bold;
`;
const OptionsView = styled.TouchableOpacity`
  flex-direction: row;
  height: 10%;
  width: 90%;
  border: 1px solid #776BC7;
  border-radius: 10px;
  align-items: center;
  padding-left: 7px;
  margin-top: 2%
`;
