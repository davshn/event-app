import styled from "styled-components/native";
import { View, Image } from "react-native";
import { TextColor } from "../services/theme";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const StyledView = styled.View`
  border-radius: 10px;
  border: 1.5px solid #776bc7;
  width: 220px;
  height: 100%;
  margin-right: 7px;
`;

const StyledTitle = styled.Text`
  font-weight: bold;
  font-size: 13px;
  color: ${TextColor};
`;

export const MyComponent = ({ name, pic, date, time, price }) => {
  const navigation = useNavigation();
  return(
  <StyledView onPress={() => navigation.navigate("Detail")}>
    <Image
      style={{ width: "100%", height: 115, borderRadius: 10 }}
      source={{
        uri:
          pic ||
          "https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg",
      }}
    />
    <View style={{ display: "flex", flexDirection: "row", width:"100%", height: "36%", padding: "3%" }}>
      <View
        style={{
          display: "flex",
          width: "55%",
          flexDirection: "column"
        }}
      >
        <StyledTitle>{name}</StyledTitle>
        <StyledTitle>${price}</StyledTitle>
      </View>
      <View
        style={{
          display: "flex",
          width: "45%",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            display: "flex",
            alignSelf: "center",
            flexDirection: "row",
            height: "50%",
          }}
        >
          <MaterialCommunityIcons
            name="calendar-outline"
            color={"#776BC7"}
            size={18}
          />
          <StyledTitle>{date}</StyledTitle>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "center",
            height: "50%",
          }}
        >
          <MaterialCommunityIcons
            name="time-outline"
            color={"#776BC7"}
            size={18}
          />
          <StyledTitle>{time} hs.</StyledTitle>
        </View>
      </View>
    </View>
  </StyledView>
)};

export default MyComponent;