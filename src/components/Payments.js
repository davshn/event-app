import React, { useState } from "react";
import { useStripe } from "@stripe/stripe-react-native";
import { View,  TextInput, Button , Alert,Text} from "react-native";
import { useSelector } from "react-redux";
import { StyledButton, TextButton } from "../generiComponents/GenericStyles";

const Payments = () => {
  // const [name, setName] = useState("");
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
      {/* <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Name"
        style={{ width: 200, fontSize: 20, padding: 10, borderWidth: 1 }}
      /> */}

      <StyledButton style={{right: '20%', backgroundColor:'#121212'}} onPress={pay}>
        <TextButton>Comprar Entrada</TextButton>
      </StyledButton>
    </View>
  );
};

export default Payments;
