import React, {useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from '../../../assets/detechtlogo.jpeg'
import CustomInput from '../../components/CustomInput';
import SignInButton from '../../components/SignInButton';
import SignUpButton from '../../components/SignUpButton';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';


const HomeScreen = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const navigation = useNavigation();


    const onLogOutPress = () => {
        console.warn("onLogOutPress")
        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.root}>
            <Text>Home</Text>
            <CustomButton text="Logout" onPress={onLogOutPress}></CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
       padding: 20,
       alignItems: 'center',
       backgroundColor: 'white',
    },
});

export default HomeScreen;