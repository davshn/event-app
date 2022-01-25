import { useStripe } from "@stripe/stripe-react-native";
import { useEffect } from "react";
import { View, Alert } from "react-native";
import { useSelector } from "react-redux";
import { StyledButton, TextButton } from "../generiComponents/GenericStyles";

export default function Payments(props) {
	const user = useSelector((state) => state.authUserReducer);
	const shopItems = useSelector((state) => state.shopReducer);
  const price = shopItems.totalToPay
	let name = user.name;
	const stripe = useStripe();

	let infoTicket = shopItems.cartItems.map((e) => {
		return {
			eventId:e.id,
			precio: e.price,
			evento: e.name,
			comprador: name,
			cantidad: e.counter,
			fecha: e.date,
			hora: e.time,
		};
	});

	infoTicket = [...infoTicket, { 
    itemCount: shopItems.itemCount,
    totalToPay: shopItems.totalToPay,
// update:shopItems.update
  }];


	// useEffect(() => {
	// 	console.log(infoTicket);
	// }, []);

	const pay = async () => {
		try {
			const response = await fetch(`https://find-spot.herokuapp.com/pay`, {
				method: "POST",
				body: JSON.stringify({ name ,price }),
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

			if (response.ok) {
				const Ticket = () => {
					return async function () {
						await axios.post("https://find-spot.herokuapp.com/infoTicket",infoTicket);
					};
				};
				Alert.alert("Compra realizada con éxito!");
			}
		} catch (error) {
			console.error(error);
			Alert.alert("Algo salió mal , prueba de nuevo luego");
		}
	};

	return (
		<View style={{ right: "2%", bottom: "1%"}}>
			<StyledButton
				style={{ marginTop: "4%", backgroundColor: "#121212", width: "100%" }}
				onPress={pay}>
				<TextButton style={{ color: "#EDEDED" }}>Pagar</TextButton>
			</StyledButton>
		</View>
	);
}
