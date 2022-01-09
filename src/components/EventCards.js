import { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

const Item = ({ item }) => (
  //    let { textCard , card ,cardImage} = styles

  <View style={styles.container}>
    <Image
      style={styles.cardImage}
      source={{
        uri: "https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg",
      }}
    />
    <View style={styles.description}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.when}>{item.date}</Text>
      {/* <Text style={styles.who}>{item.who}</Text> */}
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.price}>{item.time}</Text>
    </View>
  </View>

  // "date": "2022-10-15",
  //     "eventPic": null,
  //     "id": 2,
  //     "name": "Baile ",
  //     "price": 305.3,
  //     "time": "12:00",
);

export function EventCards() {
  const [events, setEvents] = useState([]);

  useEffect(() => getEvents(), []);

  const getEvents = () => {
    axios
      .get("https://find-spot.herokuapp.com/events")
      .then((res) => {
        return setEvents(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navigation = useNavigation();


  
  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Detail",{item:item})}
        style={styles.card}
      >
        <Item item={item}  />
      </TouchableOpacity>
    );
  };



  return (
    <FlatList
      data={events}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id}
      // extraData={(item) => item.id}
      navigation={navigation}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  description: {},

  title: {
    fontSize: 23,
    padding: 10,
  },
  when: {
    fontSize: 20,
    padding: 5,
  },
  who: {
    fontSize: 18,
    padding: 2,
  },
  price: {
    fontSize: 20,
    padding: 5,
  },
  card: {
    backgroundColor: "#ffff",
    marginBottom: 10,

    width: "95%",
    shadowColor: "#776bc7",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 4,
  },
});
