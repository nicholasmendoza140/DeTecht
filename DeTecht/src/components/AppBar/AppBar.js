import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Surface, Appbar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../../screens/HomeScreen'

const myIcon = <Icon name="person" color='black'></Icon>

const AppBar = ( {onPress} ) => {
    return(
        <Appbar.Header style={styles.top}>
            <Appbar.Content style = {{alignItems: 'baseline', marginLeft: -50 }} title={<Text style={styles.text}>DeTecht</Text>} />
            <Appbar.Action icon='account' size={28} onPress={onPress} />
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    top: {
        height: 55,
        elevation: 0,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    }
})

export default AppBar;