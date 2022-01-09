import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from "./components/Login";
import Register from './components/Register';
import { useSelector,useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import Root from './Root';
import { CrearEvento } from './components/CrearEvento';
import { LogoTitle } from "./components/LogoTitle"
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Switch } from 'react-native-paper';
import { useState } from 'react';
import { setDarkModeOn, setDarkModeOff } from './stateManagement/actions/darkModeActions';
import { eraseUser } from './stateManagement/actions/authUserActions';

const Drawer = createDrawerNavigator();

export default function Index() {
    const modes = useSelector(state => state.darkModeReducer.darkMode);
    const logged = useSelector(state => state.authUserReducer.logged);
    const dispatch = useDispatch();
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    
    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn);
        dispatch(isSwitchOn ? setDarkModeOff() : setDarkModeOn());
    };
    
    const endSession = (props) => {
        props.navigation.navigate("Inicio");
        dispatch(eraseUser());
    };
    console.log(logged)
    return (
        <NavigationContainer >
            <ThemeProvider theme={{ mode: (modes) ? 'dark' : 'light' }}>
                <Drawer.Navigator initialRouteName="Home" screenOptions={{headerTitle: () => <LogoTitle />}} drawerContent={props => {
                    return (
                        <DrawerContentScrollView {...props}>
                            <DrawerItemList {...props} />
                            {logged?<DrawerItem label="Cerrar sesion" onPress={() => endSession(props)} />: <></>}
                            <Switch style={{ alignSelf: "center" }} color={ "darkslateblue"} value={isSwitchOn} onValueChange={onToggleSwitch} />
                        </DrawerContentScrollView>
                    )}}>
                    <Drawer.Screen name="Inicio" component={Root} />
                    {!logged?<Drawer.Screen name="Ingresar" component={Login} />:<></>}
                    {!logged?<Drawer.Screen name="Registrarse" component={Register} />:<></>}
                    {logged ? <Drawer.Screen name="Crear evento" component={CrearEvento} /> : <></>}
                </Drawer.Navigator>
            </ThemeProvider>
        </NavigationContainer>
        
    )
}