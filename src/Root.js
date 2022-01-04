import { ThemeProvider } from 'styled-components/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function Root() { 
    const modes = useSelector(state=>state.darkModeReducer.darkMode);
    return (
        <>
            <NavigationContainer >
                <ThemeProvider theme={{ mode: (modes) ? 'dark' : 'light' }}>
                    <Stack.Navigator screenOptions={{headerShown: false}}>                      
                    </Stack.Navigator>
                </ThemeProvider>
            </NavigationContainer>
        </>
    )
}