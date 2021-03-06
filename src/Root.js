import { createStackNavigator } from '@react-navigation/stack';
import Login from "./components/Login";
import Register from './components/Register';
import HomeScreen from "./components/Home";
import Edetail from '../src/components/EventDetail';
import EditEvent from './components/EditEvent';
import cart_Shopper from './components/ShoppingCart';
import UserUpdate from './components/UserUpdate';
import { TicketList } from './components/TicketList'
import { Receipt } from './components/Receipt';
const Stack = createStackNavigator();

export default function Root() {

    return (
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="Detail" component={Edetail} />
				<Stack.Screen name="EditEvent" component={EditEvent} />
				<Stack.Screen name="UserUpdate" component={UserUpdate} />
				<Stack.Screen name="TicketList" component={cart_Shopper}/>
				<Stack.Screen name="ListadoTickets" component={TicketList}/>
				<Stack.Screen name="Receipt" component={Receipt}/>
			</Stack.Navigator>
		);
}
