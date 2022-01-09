import { createStackNavigator } from '@react-navigation/stack';
import Login from "./components/Login";
import Register from './components/Register';
import HomeScreen from "./components/Home";
import Edetail from '../src/components/EventDetail';

const Stack = createStackNavigator();

export default function Root() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Detail" component={Edetail}/>

        </Stack.Navigator>
    )
}
