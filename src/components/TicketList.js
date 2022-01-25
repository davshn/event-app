import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { OptionsView, StyledText, StyledTitle, ViewBackground } from "../generiComponents/GenericStyles";

/* AQUI SE HACE EL GETALL QUE DEVUELVE todos LOS TICKETS POR PERSONA  */
let events = [
  { key: "Iron Man" },
  { key: "Thor" },
  { key: "Captain America" },
  { key: "Hulk" },
  { key: "Black Widow" },
  { key: "Hawkeye" },
];

const Item = ({ item }) => (
  <OptionsView>
    <StyledText>Hola</StyledText>
  </OptionsView>
);

export const TicketList = () => {
  const modes = useSelector((state) => state.darkModeReducer.darkMode);
  const navigation = useNavigation();
  

  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Receipt", { item: item })}
      >
        <Item item={item} />
      </TouchableOpacity>
    );
  };

  let key = 1;

  return (
    <ViewBackground>
        <StyledTitle>Mis entradas</StyledTitle>
      <FlatList
        style={{
          backgroundColor: modes ? "#292929" : "#EDEDED",
          height: "100%",
        }}
        data={events}
        renderItem={_renderItem}
        keyExtractor={() => key++}
        navigation={navigation}
      />
    </ViewBackground>
  );
};