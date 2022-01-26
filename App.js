import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./src/stateManagement/store";
import Index from "./src/Index";
import { Provider as PaperProvider } from "react-native-paper";
import { StripeProvider } from "@stripe/stripe-react-native";
import React, { useEffect } from "react";
import registerNNPushToken from "native-notify";


export default function App() {
	//NOTIFICATIONS
	let pushDataObject = registerNNPushToken(1027, "QDhK0aqm5Kl4RbiDFPKh5U");
	return (
		<>
			<Provider store={store}>
				<StripeProvider publishableKey="pk_test_51KHAP5LIn0UuDGLfU55zd6ikHNqTr28CKWnmaIWQNakzbMYAzXJxApeizgsbyuJGThrTusYIid4A52vtTlrJCdre00YR7QAAe4">
					<PaperProvider>
						<Index />
					</PaperProvider>
				</StripeProvider>
			</Provider>
		</>
	);
}
