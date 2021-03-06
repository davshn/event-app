import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from "./components/Login";
import Register from './components/Register';
import { useSelector,useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import Root from './Root';
import CreateEvent from './components/CreateEvent';
import { LogoTitle, LogoTitle2 } from "./components/LogoTitle"
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Switch } from 'react-native-paper';
import { useState } from 'react';
import { setDarkModeOn, setDarkModeOff } from './stateManagement/actions/darkModeActions';
import { eraseUser } from './stateManagement/actions/authUserActions';
import Shopper from './components/ShoppingCart';
import aboutUs from './components/AboutUs';
import { View } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

export default function Index() {
  const modes = useSelector(state => state.darkModeReducer.darkMode);
  const logged = useSelector(state => state.authUserReducer.logged);
  const dispatch = useDispatch();
  const [isSwitchOn, setIsSwitchOn] = useState(false);
    
  const DrawerOptions = {   // drawer styles
    headerTitle: () => <LogoTitle />,
    drawerInactiveTintColor: modes ? '#EDEDED' : '#292929',
    drawerInactiveBackgroundColor: modes ? '#292929' : '#EDEDED',
    drawerActiveTintColor: modes ? '#EDEDED' : '#EDEDED',
    drawerActiveBackgroundColor: "#776BC7",
    drawerStyle: { backgroundColor: modes ? '#292929' : '#EDEDED' },
    headerStyle: { backgroundColor: modes ? '#292929' : '#EDEDED', elevation: 0 },
    headerTintColor: modes ? '#776BC7' : '#776BC7',
    }

    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn);
        dispatch(isSwitchOn ? setDarkModeOff() : setDarkModeOn());
    };
    
    const endSession = (props) => {
        props.navigation.navigate("Inicio");
        dispatch(eraseUser());
  };
  
  
    return (
      <NavigationContainer>
        <ThemeProvider theme={{ mode: modes ? "dark" : "light" }}>
          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={DrawerOptions}
            drawerContent={(props) => {
              return (
                <DrawerContentScrollView {...props}>
                  <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                      <MaterialCommunityIcons name="sunny-outline" color={"#776BC7"} size={30}/>
                      <Switch
                        style={{ alignSelf: "center" }}
                        color={"#776BC7"}
                        value={isSwitchOn}
                        onValueChange={onToggleSwitch}
                      />
                       <MaterialCommunityIcons name="moon-outline" color={"#776BC7"} size={25}/>
                  </View>
                  <DrawerItemList {...props} />
                  {logged ? (
                    <DrawerItem
                      labelStyle={{color: modes? '#EDEDED' : '#292929'}}
                      label="Cerrar sesion"
                      onPress={() => endSession(props)}
                    />
                  ) : (
                    <></>
                  )}
                </DrawerContentScrollView>
              );
            }}
          >
            <Drawer.Screen name="Inicio" options={{headerTitle: () => <LogoTitle2 />}} component={Root}/>
            {!logged ? (
              <Drawer.Screen name="Ingresar" component={Login} />
            ) : (
              <></>
            )}
            {!logged ? (
              <Drawer.Screen name="Registrarse" component={Register} />
            ) : (
              <></>
            )}
            {logged ? (
              <Drawer.Screen name="Crear evento" component={CreateEvent} />
            ) : (
              <></>
            )}
             {logged ? (
                <Drawer.Screen name="Carrito de Compras" component={Shopper} />
            ) : (
              <></>
            )}
            
            <Drawer.Screen name="About Us" component={aboutUs}/>
           
          </Drawer.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    );

}