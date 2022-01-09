import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from "./components/Login";
import Register from './components/Register';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import Root from './Root';
import { CrearEvento } from './components/CrearEvento';
import { LogoTitle } from "./components/LogoTitle"

const Drawer = createDrawerNavigator();

export default function Index() {
    const modes = useSelector(state => state.darkModeReducer.darkMode);
    const logged = useSelector(state => state.authUserReducer.logged);
    return (
        <NavigationContainer >
            <ThemeProvider theme={{ mode: (modes) ? 'dark' : 'light' }}>
                <Drawer.Navigator initialRouteName="Home" screenOptions={{headerTitle: () => <LogoTitle />}} >
                    <Drawer.Screen name="Inicio" component={Root} />
                    {!logged?<Drawer.Screen name="Ingresar" component={Login} />:<></>}
                    {!logged?<Drawer.Screen name="Registrarse" component={Register} />:<></>}
                    {logged?<Drawer.Screen name="Crear evento" component={CrearEvento} />:<></>}
                </Drawer.Navigator>
            </ThemeProvider>
        </NavigationContainer>
        
    )
}