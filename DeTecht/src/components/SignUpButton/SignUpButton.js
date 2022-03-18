import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const SignUpButton = ({ onPress, text }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    text: {
        color: 'grey',
        fontWeight: 'bold',
    },
})

export default SignUpButton;