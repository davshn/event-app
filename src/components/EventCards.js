import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
// import data from "../../data";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Event",
    location: "mi Home",
    when: "dom ,9 de ene de 2022 12:00 -03+ ",
    price: "$",
    who: "Henry Productions ",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Event",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Event",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  //    let { textCard , card ,cardImage} = styles
  <View style={styles.container}>
    <TouchableOpacity
      onPress={onPress}
      style={styles.card}
      // style={[styles.item, backgroundColor]}
    >
      <Image
        style={styles.cardImage}
        source={{
          uri: "https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg",
        }}
      />
      <View style={styles.description}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.when}>{item.when}</Text>
        <Text style={styles.who}>{item.who}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  </View>
);
//location no porque para eso esta

export function EventCards() {
  const [selectedId, setSelectedId] = useState(null);

  const _renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  let { container } = styles;
  return (
    // <SafeAreaView style={container}>
    <FlatList
      data={DATA}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
    />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  description: {
 

  },

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

// export function EventCard() {

//   let {container , textCard , card ,cardImage} = styles
//   return (
//     <View style={container}>
//       <TouchableOpacity style={card}>
//         <Image
//           style={cardImage}
//           source={{
//             uri: "https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg",
//           }}
//         />
//         <Text style={textCard}>Nuevo Evento!!</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
