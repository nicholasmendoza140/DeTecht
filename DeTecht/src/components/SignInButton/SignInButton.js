import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const SignInButton = ({ onPress, text }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00BFFF',
        width: '100%',
        padding: 8,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    }
})

export default SignInButton;