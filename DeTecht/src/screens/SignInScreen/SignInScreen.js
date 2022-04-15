import React, {useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from '../../../assets/detechtlogo.jpeg'
import CustomInput from '../../components/CustomInput';
import SignInButton from '../../components/SignInButton';
import SignUpButton from '../../components/SignUpButton';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native-web';


const SignInScreen = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const navigation = useNavigation();

    const onSignInPress = async () => {
        console.warn("Sign in");
        fetch("http://10.251.150.101:3000/signin", {
            method: "POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                username : username,
                password: password,
            })
        })
        .then((response) => {
            if (response.status == 200) {
                navigation.navigate('Home', {username:username})
                console.log(response.status)
            } 
            else {
                console.log(response.status)
                alert("Invalid login")
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const onSignUpPress = () => {
        console.warn("onSignUpPress")
        navigation.navigate('SignUp')
    }

    return (
        <View style={styles.root}>
            <Image source={Logo} />
            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername}
                autoCapitalize={'none'}
            />
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                secureTextEntry={true}
                autoCapitalize={'none'}
            />
            <SignInButton text ="Sign In" onPress={onSignInPress}/>
            <SignUpButton text ="Register" onPress={onSignUpPress}/>
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

export default SignInScreen;