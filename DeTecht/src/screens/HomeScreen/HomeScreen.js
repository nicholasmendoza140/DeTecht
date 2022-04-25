import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, StyleSheet, Image, View, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import { Appbar } from 'react-native-paper'
import AppBar from '../../components/AppBar';


const HomeScreen = (props) => {
    const username = props.route.params.username
    const navigation = useNavigation();
    const [events, setEvents] = useState([{
        owner: '',
        eventName: '',
        description: '',
    }])

    const checkMyInvites = () => {
        fetch("http://10.251.150.101:3000/invites", {
            method: "POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                username : username
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

    useEffect(() => {
        checkMyInvites();
        console.log(events)
    }, [])


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
        <ScrollView>
            <AppBar onPress={onProfilePress} />
            <Text style={{alignSelf:'center'}}>Hello {props.route.params.username}</Text>
            <CustomButton text="Create Event" disabled={false} onPress={onCreateEventPress}></CustomButton>
            <CustomButton text="Logout" type ="SECONDARY" disabled={false} onPress={onLogOutPress}></CustomButton>
            <Text style={styles.header1}>My Invites</Text>
            <View style={{padding: 15}}>
            {events.map((event, index) => {
                return(
                    <View key={index} style={styles.eventContainer}>
                        <Text style={styles.eventName}>{event.eventName}</Text>
                        <Text>{event.description}</Text>
                        <Text>Hosted by {event.owner}</Text>
                    </View> 
                )
            })}
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: { 
       padding: 30,
       backgroundColor: 'white',
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
});

export default HomeScreen;