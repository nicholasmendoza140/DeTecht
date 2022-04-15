import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, StyleSheet, Image, Pressable } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = (props) => {
    const username = props.route.params.username
    const navigation = useNavigation();

    const onVaccPress = () => {
        console.log("onVaccPress")
        navigation.navigate('VaccUpload', {username:username})
    }

    const [state, setState] = useState("PRIMARY")
    const [disabledState, setDisabledState] = useState(false)
    const [buttonText, setButtonText] = useState("Add Vaccine Record")
    console.log(state) 

    const checkVaccStatus = () => {
        fetch("http://10.251.150.101:3000/checkvacc", {
            method: "POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                username : username
            })
        })
        .then(res => {
            if (res.ok )
            {
                setState("Found")
                setDisabledState(true)
                setButtonText("Vaccine Uploaded")
                console.log(res.json()) 
                return true
            }    
            else 
                setState("PRIMARY")    
                setDisabledState(false)  
                return false                                        
        }).catch(err => {
            console.log("error", err)
        })
    }

    useEffect(() => {
        checkVaccStatus();
        if (checkVaccStatus() == true)
            setDisabledState(true)
    }, [])
    

    return (
        <SafeAreaView>
            <Text style={styles.name} >{username}</Text>
            <CustomButton style={{alignSelf: 'center'}} text={buttonText} type={state} disabled={disabledState} onPress={onVaccPress}></CustomButton>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    name: {
        padding: 18,
        marginLeft: 5,
        fontSize: 26,
        fontWeight: 'bold',
    } 
})

export default ProfileScreen