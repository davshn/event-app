import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from "./components/Login";
import Register from './components/Register';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import Root from './Root';
import { CrearEvento } from './components/CrearEvento';

const Drawer = createDrawerNavigator();

export default function Index() {
    const modes = useSelector(state => state.darkModeReducer.darkMode);
    
    return (
        <NavigationContainer >
            <ThemeProvider theme={{ mode: (modes) ? 'dark' : 'light' }}>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Root" component={Root} />
                    <Drawer.Screen name="Log in" component={Login} />
                    <Drawer.Screen name="Register" component={Register} />
                    <Drawer.Screen name="Crear evento" component={CrearEvento} />
                </Drawer.Navigator>
            </ThemeProvider>
        </NavigationContainer>
        
    )
}