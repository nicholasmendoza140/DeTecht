import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const CustomButton = ({ onPress, text, type='PRIMARY' }) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles['container_'+type]]}>
            <Text style={styles['text_'+type]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '50%',
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    text_PRIMARY: {
        fontWeight: 'bold',
        color: 'white',
    },
    container_PRIMARY: {
        backgroundColor: '#00BFFF',
    },
    container_SECONDARY: {},
    text_SECONDARY: {
        color: 'black',
    }


})

export default CustomButton;