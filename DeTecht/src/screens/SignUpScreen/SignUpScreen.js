import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Logo from '../../../assets/detechtlogo.jpeg'
import CustomInput from '../../components/CustomInput';
import SignInButton from '../../components/SignInButton';
import SignUpButton from '../../components/SignUpButton';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[passwordRepeat, setPasswordRepeat] = useState('');
    
    const navigation = useNavigation();


    const onSignUpPress = () => {
        console.warn("onSignUpPress")
    }

    const onSignInPress = () => {
        console.warn("onSignInPress")
        navigation.navigate("SignIn")
    }

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Create Account</Text>
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
            <CustomInput 
                placeholder="Confirm Password" 
                value={passwordRepeat} 
                setValue={setPasswordRepeat}
                secureTextEntry={true}
                autoCapitalize={'none'}
            />
            <SignInButton text ="Sign Up" onPress={onSignUpPress}/>
            <CustomButton text="Have an account? Sign in" onPress={onSignInPress} type="SECONDARY"></CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
       padding: 20,
       alignItems: 'center',
       backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
    }
});

export default SignUpScreen;