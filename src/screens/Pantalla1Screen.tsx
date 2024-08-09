import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'

export const Imagen1 = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/funcion.png')}
                style={styles.backgroundImage}
                resizeMode= 'center'>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
});  