import { Image } from "react-native";
import { Logo, StyledText } from "../generiComponents/GenericStyles";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

export function LogoTitle() {
  return (
    <Logo>
      <Image style={{ width: 30, height: 30, borderRadius: 10 }} source={require("../public/logo.png")}/>
      <StyledText style={{ fontSize: 20, fontWeight: "bold", marginRight: "30%"}}>
        findSpot
      </StyledText>
      <MaterialCommunityIcons name="cart-outline" color={"#776BC7"} size={25} onPress={() => console.log("hola")}/>
    </Logo>
  );
}
