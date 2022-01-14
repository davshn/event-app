import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { EventItem, EventImage, CardInfo, CardInfoText, EventItemContainer } from "../generiComponents/GenericStyles";
import { searchByFilters } from '../stateManagement/actions/getEventsActions';

const Item = ({ item }) => (
  //    let { textCard , card ,cardImage} = styles
  <EventItem>
    <EventImage
      source={{
        uri: "https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg",
      }}
    />
    <CardInfo>
      <CardInfoText>{item.name}</CardInfoText>
      <CardInfoText>{item.date}</CardInfoText>
      {/* <CardInfoText style={styles.who}>{item.who}</CardInfoText> */}
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
  const modes = useSelector(state => state.darkModeReducer.darkMode);

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
      style={{backgroundColor: modes? '#292929' : '#EDEDED'}}
      data={events}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id}
      // extraData={(item) => item.id}
      navigation={navigation}
      />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 5,
//   },
//   description: {},

//   title: {
//     fontSize: 23,
//     padding: 10,
//   },
//   when: {
//     fontSize: 20,
//     padding: 5,
//   },
//   who: {
//     fontSize: 18,
//     padding: 2,
//   },
//   price: {
//     fontSize: 20,
//     padding: 5,
//   },
//   card: {
//     marginBottom: 10,
//     width: "95%",
//     shadowColor: "#776bc7",
//     shadowOpacity: 1,
//     shadowOffset: {
//       width: 3,
//       height: 3,
//     },
//   },
//   cardImage: {
//     width: "100%",
//     height: 200,
//     resizeMode: "cover",
//   },
//   item: {
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 4,
//   },
// });
