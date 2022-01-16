import { useStripe } from "@stripe/stripe-react-native";
import { View,  Alert} from "react-native";
import { useSelector } from "react-redux";
import { StyledButton, TextButton } from "../generiComponents/GenericStyles";

export default function Payments () {
const user = useSelector((state) => state.authUserReducer);
  let name = user.name
  const stripe = useStripe();

  const pay = async () => {
    try {
      const response = await fetch(`https://find-spot.herokuapp.com/pay`, {
        method: "POST",
        body: JSON.stringify({ name }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      const data = await response.json();

      if (!response.ok) return Alert.alert(data.message);
      const clientSecret = data.clientSecret;

            const initSheet = await stripe.initPaymentSheet({
              paymentIntentClientSecret: clientSecret,
              merchantDisplayName: "Merchant Name",
            });

      if (initSheet.error) return Alert.alert(initSheet.error.message);

            const presentSheet = await stripe.presentPaymentSheet({ clientSecret });

      if (presentSheet.error) return Alert.alert(presentSheet.error.message);

            Alert.alert("Compra realizada con éxito!");
    } catch (error) {
      console.error(error);
      Alert.alert("Algo salió mal , prueba de nuevo luego");
    }
  };

  return (
    <View>
      <StyledButton style={{ marginTop: '20%',backgroundColor:'#121212'}} onPress={pay}>
        <TextButton style={{ color: "#EDEDED"}}>Comprar Entrada</TextButton>
      </StyledButton>
    </View>
  );
};
