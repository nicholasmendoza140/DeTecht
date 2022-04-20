import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, StyleSheet, Image, Pressable, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = (props) => {
    const username = props.route.params.username
    const navigation = useNavigation();

    const [events, setEvents] = useState([{
        owner: '',
        eventName: '',
        description: '',
    }])


    const onVaccPress = () => {
        console.log("onVaccPress")
        navigation.navigate('VaccUpload', {username:username})
    }
    
    const [state, setState] = useState("PRIMARY")
    const [disabledState, setDisabledState] = useState(false)
    const [buttonText, setButtonText] = useState("Add Vaccine Record")
    console.log(state) 

    const checkMyEvents = () => {
        fetch("http://10.251.150.101:3000/events", {
            method: "POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                owner : username
            })
        }) 
        .then(res => {
            if (res.ok)
            {
                return res.json()
            }
            })
        .then(jsonRes => setEvents(jsonRes))
    }

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
        checkMyEvents();
        console.log(events)
    }, [])
    

    return (
        <SafeAreaView>
            <Text style={styles.name} >{username}</Text>
            <CustomButton style={{alignSelf: 'center'}} text={buttonText} type={state} disabled={disabledState} onPress={onVaccPress}></CustomButton>
            <Text style={styles.header1}>My Events</Text> 
            <View style={{padding: 15}}>
            {events.map((event) => {
                return(
                    <View style={styles.eventContainer}>
                        <Text style={styles.eventName}>{event.eventName}</Text>
                        <Text>{event.description}</Text>
                    </View> 
                )
            })}
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create ({
    name: {
        padding: 18,
        marginLeft: 5,
        fontSize: 26,
        fontWeight: 'bold',
    },
    header1: {
        padding: 15,
        marginLeft: 5,
        fontSize: 22,
        fontWeight: 'bold'
    },
    eventContainer: {
        borderRadius: 5,
        borderWidth: 3,
        padding: 15,
        marginVertical: 8,
    },
    eventName: {
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default ProfileScreen