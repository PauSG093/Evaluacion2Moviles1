import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',  // Fondo gris
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
    },
});
