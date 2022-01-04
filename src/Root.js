import { ThemeProvider } from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import TimelineDefault from './components/TimelineDefault'
import TimelineSeguidos from './components/TimelineSeguidos'

const Tab = createBottomTabNavigator()
export default function Root() {


    const modes = useSelector(state=>state.darkModeReducer.darkMode);
    return (
        <>
            <NavigationContainer >
                <ThemeProvider theme={{ mode: (modes) ? 'dark' : 'light' }}>
                    <Tab.Navigator screenOptions={{headerShown: false}}>
                        <Tab.Screen name="TlDefault" component={TimelineDefault}/>       
                        <Tab.Screen name="TlSeguidos" component={TimelineSeguidos}/>    
                    </Tab.Navigator>
                </ThemeProvider>
            </NavigationContainer>
        </>
    )
}