import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigator';
import { estilos } from '../theme/appTheme';

// Tipar el objeto de navegación para la pantalla actual
type InicioScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Inicio'>;

export const Inicio = () => {
  const navigation = useNavigation<InicioScreenNavigationProp>();

  return (
    <View style={estilos.container}>
      <ButtonComponent 
        textButton='Imagen1' 
        actionButton={() => navigation.navigate('Imagen1')} 
      />
      <ButtonComponent 
        textButton='Imagen2' 
        actionButton={() => navigation.navigate('Imagen2')} 
      />
      <ButtonComponent 
        textButton='Mayor que' 
        actionButton={() => navigation.navigate('Mayorque')} 
      />
      <ButtonComponent 
        textButton='Menor que' 
        actionButton={() => navigation.navigate('Menorque')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    backgroundColor: 'lightblue',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30
},
buttonText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
}
});
