import { FlatList } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { OptionsView, StyledText, StyledTitle, ViewBackground } from "../generiComponents/GenericStyles";
import { useEffect } from "react";
import { getTickets } from "../stateManagement/actions/authUserActions";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

const Item = ({ item }) => (
  <OptionsView style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <StyledText>{item.eventName}</StyledText>
    <StyledText>
      <MaterialCommunityIcons
        name="location-outline"
        color={"#776BC7"}
        size={20}
      />{" "}
      {item.place}
    </StyledText>
  </OptionsView>
);

export const TicketList = () => {
  const dispatch = useDispatch();
  const modes = useSelector((state) => state.darkModeReducer.darkMode); // estilos
  const tickets = useSelector((state) => state.authUserReducer.tickets);
  const user = useSelector((state) => state.authUserReducer);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getTickets(user.id));
  });

  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Receipt", { item: item })}
      >
        <Item item={item} />
      </TouchableOpacity>
    );
  };

  return (
    <ViewBackground>
      <StyledTitle>Mis entradas</StyledTitle>
      <FlatList
        style={{
          backgroundColor: modes ? "#292929" : "#EDEDED",
          height: "100%",
        }}
        data={tickets}
        renderItem={_renderItem}
        keyExtractor={(item) => item.idTicket}
        navigation={navigation}
      />
    </ViewBackground>
  );
};
