import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StartScreen from './StartScreen';
import Explore from './Explore';
import ForYou from './ForYou';
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator()
// aqui van los iconos 
export default function HomeScreen() {
  const modes = useSelector(state => state.darkModeReducer.darkMode);
  const TabOptions = { //Tab styles
    headerShown: false,
    tabBarInactiveBackgroundColor: modes? '#292929' : '#EDEDED',
    tabBarActiveBackgroundColor: modes? '#292929' : '#EDEDED',
    tabBarActiveTintColor: modes? "#776BC7" : "#5302de",
    tabBarInactiveTintColor: modes? "#776BC7" : "#5302de"
  }

  const logged = useSelector(state => state.authUserReducer.logged);
    return (
      <>
        <Tab.Navigator screenOptions={TabOptions}>
          <Tab.Screen
            name="Inicio"
            component={StartScreen}
            options={{
              tabBarLabel:"",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="home-outline"
                  color={modes? "#776BC7" : "#5302de"}
                  size={size}
                />
              ),
            }}
            
          />
          <Tab.Screen
            name="Explorar"
            component={Explore}
            options={{
              tabBarLabel:"",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="earth-outline" // "globe-outline"
                  color={modes? "#776BC7" : "#5302de"}
                  size={size}
                />
              ),
            }}
          />
          {logged ? <Tab.Screen
            name="Para ti"
            component={ForYou}
            options={{
              tabBarLabel:"",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="person-outline"
                  color={modes? "#776BC7" : "#5302de"}
                  size={size}
                />
              ),
            }}
          /> : <></>}
        </Tab.Navigator>
      </>
    );
}