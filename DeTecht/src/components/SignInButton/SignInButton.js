import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const SignInButton = ({ onPress, text, type }) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles['container_${type}']]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00BFFF',
        width: '100%',
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    container_SECONDARY: {},
    text_SECONDARY: {
        color: 'grey',
    }


})

export default SignInButton;