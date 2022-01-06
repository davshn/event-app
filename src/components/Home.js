import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioScreen from './Inicio'
import ExplorarScreen from './Explorar'
import ParaTiScreen from './ParaTi'

const Tab = createBottomTabNavigator()
// aqui van los iconos 
export function HomeScreen(){
    return(
        <>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="Inicio" component={InicioScreen}/>        
                <Tab.Screen name="Explorar" component={ExplorarScreen}/> 
                <Tab.Screen name="Para ti" component={ParaTiScreen}/>    
            </Tab.Navigator>
        </>
    )
}