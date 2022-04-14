import React, {useState} from 'react';
import { SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = (props) => {
    const username = props.route.params.username
    const navigation = useNavigation();

    const onVaccPress = () => {
        navigation.navigate('VaccUpload', {username:username})
    }

    const [state, setState] = useState("")
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
                console.log(res.json())      
            }    
            else 
                setState("NotFound")                                                  
        }).catch(err => {
            console.log("error", err)
        })
    }
    checkVaccStatus();

    return (
        <SafeAreaView>
            <Text style={styles.name} >{username}</Text>
            <CustomButton style={{alignSelf: 'center'}} text="Add Vaccine Record" type="PRIMARY" onPress={onVaccPress}></CustomButton>
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