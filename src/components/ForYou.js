import { backgroundColor, TextColor } from "../services/theme.js";
import React, { useEffect } from "react";
import { View, ScrollView, Text, StyleSheet ,Image} from "react-native";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux"
import { searchByFilters } from '../stateManagement/actions/getEventsActions';

const StyledView = styled.ScrollView`
  background-color: ${backgroundColor};
`;

export default function ForYou() {
  const dispatch = useDispatch();
  const events = useSelector(state => state.getEventsReducer.events);

  useEffect(() => dispatch(searchByFilters()), []);

  const modes = useSelector(state => state.darkModeReducer.darkMode);
  return (
    <StyledView>
      <ContainerImg style={{backgroundColor: "#5641abff"}} >
        <BgImage
          source={{
            uri: "https://images.unsplash.com/photo-1516889782132-fb580815f8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80https://images.unsplash.com/photo-1516889782132-fb580815f8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          }}
        />

        <BottomContainer>
          <ProfileImg
            source={{
              uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            }}
          />
          <TextName>Ada Lovelace</TextName>
          <Text style={{ color: "grey", bottom: "7%" }}>New York,USA</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "75%",
            }}
          >
            <Text style={{ color: modes? '#EDEDED' : '#292929', fontSize: 18, fontWeight: "bold" }}>
              Eventos para ti
            </Text>
            <Text style={{ color: "#6d6a7f" }}>See All</Text>
          </View>

          <ScrollView
            style={{
              flexDirection: "row",
              width: "100%",
              height: "60%",
              paddingLeft: "5%",
              paddingRight: "15%",
              paddingTop: 12,
            }}
            horizontal
          >
            
          </ScrollView>




          {/* LISTado de tickets al cual se accede por id  */}
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
  margin-top: 52%;
  height: 90%;
  width: 400px;
  background-color: ${backgroundColor};
  border-radius: 50px;
  align-items: center;
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
  bottom: 8%;
  color: ${TextColor};
`;
