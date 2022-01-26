import { useStripe } from "@stripe/stripe-react-native";
import { useEffect } from "react";
import { View, Alert } from "react-native";
import { useSelector , useDispatch} from "react-redux";
import { StyledButton, TextButton } from "../generiComponents/GenericStyles";
import axios from 'axios';
import { reset } from "../stateManagement/actions/cartActions"




export default function Payments(props) {
	const user = useSelector((state) => state.authUserReducer);
	const shopItems = useSelector((state) => state.shopReducer);
  	const price = shopItems.totalToPay
	let name = user.name;
	const stripe = useStripe();
	const dispatch = useDispatch();

		
	const handleReset = () => {
		dispatch(reset());
	};

	let infoTicket = shopItems.cartItems.map((e) => {
		return {
			eventId: e.id,
			userId: user.id,
			price: e.price,
			eventName: e.name,
			quantity: e.counter,
			date: e.date,
			time: e.time,
			place: e.place
		};
	});

	infoTicket = [...infoTicket, { 
    itemCount: shopItems.itemCount,
    totalToPay: shopItems.totalToPay

  }];
	

	// useEffect(() => {
	// 	console.log(user,'aaaaaaaa' ,shopItems);
	// }, []);

	const pay = async () => {
		try {
			
			// pregunto al back si hay stock de los productos de mi carrito
 			const result = await axios.post(`https://find-spot.herokuapp.com/stock/allCartItems`, infoTicket);
			const checkStock = result.data
			
			if (!checkStock) {
				return Alert.alert("No hay stock disponible para algún item del carrito de compras")
			}
			
			
			// inicia la petición para el pago del carrito
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

			// genero el ticket por cada item del carrito
			if (response.ok) {

				const generateTicket = await axios.post("https://find-spot.herokuapp.com/infoTicket/createTicket",infoTicket);
				const newGenerateTicket = generateTicket.data
				console.log(newGenerateTicket.message) // no borren ni comenten este console log
				handleReset()
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
