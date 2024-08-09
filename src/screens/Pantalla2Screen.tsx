import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'

export const Imagen2 = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/equipo.png')}
                style={styles.backgroundImage}
                resizeMode= 'center'>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
});  