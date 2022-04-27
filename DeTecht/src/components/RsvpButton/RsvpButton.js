import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const CustomButton = ({ onPress, text, type='PRIMARY', disabled }) => {
    return (
        <Pressable onPress={onPress} disabled={disabled} style={[styles.container, styles['container_'+type]]}>
            <Text style={styles['text_'+type]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '30%',
        padding: 10,
        marginVertical: 10,
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
    },
    container_Found: {
        backgroundColor: '#55DC33',
    },
    text_Found: {
        fontWeight: 'bold',
        color: 'white',
    }


})

export default CustomButton;
    