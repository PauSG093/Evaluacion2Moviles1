import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Imagen1 } from '../screens/Pantalla1Screen';
import { Imagen2 } from '../screens/Pantalla2Screen';
import { Mayorque } from '../screens/Pantalla3Screen';
import { Menorque } from '../screens/Pantalla4Screen';
import { Inicio } from '../screens/Pantalla5Screen';


//Definir las rutas y parámetros de navegación
export type RootStackParamList = {
    Inicio: undefined;
    Imagen1: undefined;
    Imagen2: undefined;
    Mayorque: undefined;
    Menorque: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Inicio" options={{ title: 'Pantalla5Screen' }} component={Inicio} />
            <Stack.Screen name="Imagen1" options={{ title: 'Home' }} component={Imagen1} />
            <Stack.Screen name="Imagen2" options={{ title: 'Pantalla Secundaria' }} component={Imagen2} />
            <Stack.Screen name="Mayorque" options={{ title: 'Pantalla Final' }} component={Mayorque} />
            <Stack.Screen name="Menorque" options={{ title: 'Persona' }} component={Menorque} />
        </Stack.Navigator>
    );
}