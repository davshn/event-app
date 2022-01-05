import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import Login from "./components/Login"
import Register from './components/Register'
import { HomeScreen } from "./components/Home"
<<<<<<< HEAD
import { LogoTitle } from './components/LogoTitle'

const Drawer = createDrawerNavigator();

export default function Root() {
=======

const Drawer = createDrawerNavigator();
>>>>>>> 168cf48f855a03f966a27a765ee40c94348b21fb

export default function Root() {

    const modes = useSelector(state=>state.darkModeReducer.darkMode);
    return (
        <>
            <NavigationContainer >
                <ThemeProvider theme={{ mode: (modes) ? 'dark' : 'light' }}>
                    <Drawer.Navigator initialRouteName="Home">
<<<<<<< HEAD
                        <Drawer.Screen name="Home" component={HomeScreen} 
                        options={{headerTitle: () => <LogoTitle/>}}/>
=======
                        <Drawer.Screen name="Home" component={HomeScreen} />
>>>>>>> 168cf48f855a03f966a27a765ee40c94348b21fb
                        <Drawer.Screen name="Log in" component={Login} />
                        <Drawer.Screen name="Register" component={Register} />
                    </Drawer.Navigator>
                </ThemeProvider>
            </NavigationContainer>
        </>
    )
}