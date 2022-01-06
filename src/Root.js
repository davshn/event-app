import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import Login from "./components/Login"
import Register from './components/Register'
import { HomeScreen } from "./components/Home"
import { LogoTitle } from './components/LogoTitle'



const Drawer = createDrawerNavigator();

export default function Root() {

    const modes = useSelector(state=>state.darkModeReducer.darkMode);
    return (
        <>
            <NavigationContainer >
                <ThemeProvider theme={{ mode: (modes) ? 'dark' : 'light' }}>
                    <Drawer.Navigator initialRouteName="Home">
                        <Drawer.Screen name="Home" component={HomeScreen} 
                        options={{headerTitle: () => <LogoTitle/>}}/>
                        <Drawer.Screen name="Log in" component={Login} />
                        <Drawer.Screen name="Register" component={Register} />
                    </Drawer.Navigator>
                </ThemeProvider>
            </NavigationContainer>
        </>
    )
}

//Renderizado condicional 