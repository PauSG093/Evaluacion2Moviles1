import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
//import { LateralMenu } from './src/navigator/LateralMenu';
import { Imagen1 } from './src/screens/Pantalla1Screen';
import { Imagen2 } from './src/screens/Pantalla2Screen';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/> 
      {/*<Imagen2/>*/}
    </NavigationContainer>
  )
}


export default App;