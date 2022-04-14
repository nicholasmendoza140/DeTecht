import React, {useState} from 'react';
import { SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import { Appbar } from 'react-native-paper'
import AppBar from '../../components/AppBar';


const HomeScreen = (props) => {
    const username = props.route.params.username
    const navigation = useNavigation();


    const onLogOutPress = () => {
        console.warn("onLogOutPress")
        navigation.navigate('SignIn')
    }

    const onProfilePress = () => {
        console.warn("onProfilePress")
        navigation.navigate('Profile', {username:username})
    }

    const onCreateEventPress = () => {
        console.warn("onCreateEventPress")
        navigation.navigate('CreateEvent', {username:username})
    }


    return (
        <SafeAreaView style={styles.root}>
            <AppBar onPress={onProfilePress} />
            <Text style={{alignSelf:'center'}}>Hello {props.route.params.username}</Text>
            <CustomButton text="Logout" onPress={onLogOutPress}></CustomButton>
            <CustomButton text="Create Event" onPress={onCreateEventPress}></CustomButton>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: { 
       padding: 30,
       backgroundColor: 'white',
    },
});

export default HomeScreen;