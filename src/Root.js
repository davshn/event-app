import { createStackNavigator } from '@react-navigation/stack';
import Login from "./components/Login";
import Register from './components/Register';
import HomeScreen from "./components/Home";

const Stack = createStackNavigator();

export default function Root() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    )
}
