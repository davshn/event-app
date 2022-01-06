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
      <Text style={[styles.title, textColor]} style={styles.textCard}>
        {item.title}
      </Text>
    </TouchableOpacity>
  </View>
);



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
    borderRadius:'5px',
  },
  textCard: {
    fontSize: 20,
    padding: 20,
  },
  card: {
    backgroundColor: "#ffff",
    marginBottom: 10,
    marginLeft: "2%",
    width: "96%",
    shadowColor: "#121212",
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
