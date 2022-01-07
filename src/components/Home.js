import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioScreen from './Inicio'
import ExplorarScreen from './Explorar'
import ParaTiScreen from './ParaTi'
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator()
// aqui van los iconos 
export default function HomeScreen(){
    return (
      <>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Inicio"
            component={InicioScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="home-outline"
                  color={"#5302de"}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Explorar"
            component={ExplorarScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="map-outline"
                  color={"#5302de"}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Para ti"
            component={ParaTiScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="person-outline"
                  color={"#5302de"}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </>
    );
}