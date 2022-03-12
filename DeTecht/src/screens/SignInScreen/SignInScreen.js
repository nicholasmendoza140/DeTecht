import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput';
import SignInButton from '../../components/SignInButton';


const SignInScreen = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const onSignInPress = () => {
        console.warn("Sign in");
    }

    return (
        <View style={styles.root}>
            <Text>Sign In Screen</Text>
            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername}
            />
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                secureTextEntry={true}
            />
            <SignInButton text ="Sign In" onPress={onSignInPress}/>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
       padding: 20,
       alignItems: 'center',
    },
});

export default SignInScreen;