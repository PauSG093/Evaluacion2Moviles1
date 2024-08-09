import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

// Define la interfaz de props
interface Props {
    textButton: string;
    actionButton: () => void;
}

// Define el componente ButtonComponent
export const ButtonComponent = ({ textButton, actionButton }: Props) => {
    return (
        <TouchableOpacity
            onPress={actionButton}
            style={styles.button}
        >
            <Text style={styles.buttonText}>{textButton}</Text>
        </TouchableOpacity>
    );
};

// Define los estilos
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'lightblue',
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 30,
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
