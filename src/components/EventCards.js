import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
// import axios from "axios";
// import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { EventItem, EventImage, CardInfo, CardInfoText, EventItemContainer } from "../generiComponents/GenericStyles";
import { searchByFilters } from '../stateManagement/actions/getEventsActions';

const Item = ({ item }) => (
  
  <EventItem>
    <EventImage
      source={{
        uri: "https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg",
      }}
    />
    <CardInfo>
      <CardInfoText>{item.name}</CardInfoText>
      <CardInfoText>{item.date}</CardInfoText>
   
      <CardInfoText>${item.price}</CardInfoText>
      <CardInfoText>{item.time} hs.</CardInfoText>
    </CardInfo>
  </EventItem>

  // "date": "2022-10-15",
  //     "eventPic": null,
  //     "id": 2,
  //     "name": "Baile ",
  //     "price": 305.3,
  //     "time": "12:00",
);

export function EventCards() {
  const dispatch = useDispatch();
  const events = useSelector(state => state.getEventsReducer.events);

  useEffect(() => dispatch(searchByFilters()), []);

  const navigation = useNavigation();

  const _renderItem = ({ item }) => {
    return (
      <EventItemContainer onPress={() => navigation.navigate("Detail", { item: item })}>
        <Item item={item}/>
      </EventItemContainer>
    );
  };

  return (
    <FlatList
      data={events}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id}
      navigation={navigation}
      />
  );
}

