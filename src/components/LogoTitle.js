import { Image } from "react-native";
import { Logo, StyledText } from "../generiComponents/GenericStyles";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export function LogoTitle() {
  const navigation = useNavigation();
  return (
		<Logo style={{ left: "110%"}}>
			<Image
				style={{ width: 30, height: 30, borderRadius: 10 }}
				source={require("../public/logo.png")}
			/>
			<StyledText
				onPress={() => navigation.navigate("Home")}
				style={{ fontSize: 20, fontWeight: "bold" }}>
				findSpot
			</StyledText>
		</Logo>
	);
}

export function LogoTitle2() {
	const navigation = useNavigation();
	return (
		<Logo style={{ left: "90%"}}>
			<Image
				style={{ width: 30, height: 30, borderRadius: 10 }}
				source={require("../public/logo.png")}
			/>
			<StyledText
				onPress={() => navigation.navigate("Home")}
				style={{ fontSize: 20, fontWeight: "bold", marginRight: "38%" }}>
				findSpot
			</StyledText>
			<MaterialCommunityIcons
				name="cart-outline"
				color={"#776BC7"}
				size={25}
				onPress={() => navigation.navigate("TicketList")}
			/>
		</Logo>
	);
}