import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { EventItem, EventImage, CardInfo, CardInfoText, EventItemContainer } from "../generiComponents/GenericStyles";
import { View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import Loading from "./Loading";

const Item = ({ item }) => (
  
  <EventItem>
    <EventImage
      source={{
        uri: item.eventPic || "https://i.pinimg.com/564x/55/05/b7/5505b700ffbba3f9190799cb0c532535.jpg"
      }}
    />
    <CardInfo>
      <View style={{display: "flex", width: "55%",flexDirection: "column", justifyContent:"space-evenly"}}>
      <CardInfoText style={{fontSize: 23}}>{item.name}</CardInfoText>
      <CardInfoText style={{fontSize: 21}}>${item.price}</CardInfoText>
      </View>
      <View style={{display: "flex", width: "45%", flexDirection: "column", justifyContent:"space-evenly"}}>
        <View style={{display: "flex", alignSelf: "center", flexDirection:"row",height: "50%", marginTop:"15%"}}>
        <MaterialCommunityIcons
                    name="calendar-outline"
                    color={"#776BC7"}
                    size={25}
                  />
        <CardInfoText>{item.date}</CardInfoText>
        </View>
        <View style={{display: "flex", flexDirection:"row", alignSelf: "center", height: "50%"}}>
          <MaterialCommunityIcons
                      name="time-outline"
                      color={"#776BC7"}
                      size={25}
                    />
          <CardInfoText>{item.time.slice(0,5)} hs.</CardInfoText>
        </View>
      </View>
    </CardInfo>
  </EventItem>
);

export function EventCards() {
  const events = useSelector(state => state.getEventsReducer.events);
 
  const modes = useSelector(state => state.darkModeReducer.darkMode);
  const navigation = useNavigation();

  const _renderItem = ({ item }) => {
    return (
      <EventItemContainer onPress={() => navigation.navigate("Detail", { item: item })}>
        <Item item={item}/>
      </EventItemContainer>
    );
  };

  if(events.length === 0) return (<Loading></Loading>)

  return (
    <FlatList
      style={{backgroundColor: modes? '#292929' : '#EDEDED'}}
      data={events}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id}
      navigation={navigation}
      />
  );
}

