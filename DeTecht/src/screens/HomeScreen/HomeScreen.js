import React, {useState, useEffect, Component} from 'react';
import { SafeAreaView, Text, StyleSheet, Image, View, ScrollView, } from 'react-native';
import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import { Appbar } from 'react-native-paper'
import RsvpButton from '../../components/RsvpButton';
import AppBar from '../../components/AppBar';
import moment from 'moment';


const HomeScreen = (props) => {
    const username = props.route.params.username
    const navigation = useNavigation();
    const [vaccState, setvaccState] = useState(false)
    const [events, setEvents] = useState([{
        owner: '',
        eventName: '',
        Date: '',
        description: '',
    }])

    const checkMyInvites = () => {
        fetch("http://10.0.0.185:3000/invites", {
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

    const checkVaccStatus = () => {
        fetch("http://10.0.0.185:3000/checkvacc", {
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
                setvaccState(true)
                console.log(res.json()) 
                return true
            }    
            else {
                setvaccState(false)
                return false    
            }                                    
        }).catch(err => {
            console.log("error", err)
        })
    }

    const onRsvpPress = (eventID) => {
        if (vaccState == false) {
            alert("Must be vaccinated!")
        }
        else {
        fetch("http://10.0.0.185:3000/rsvp", {
        method: "POST",
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            _id : eventID,
            username : username
        })
        }) 
        .then(res => {
            res.text()
            alert("RSVP'd!")
        })
        .catch(err => {
            console.log(err)
        })
    }
    }

    useEffect(() => {
        checkMyInvites();
        checkVaccStatus()
        console.log()
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

    const onChartPress = () => {
        navigation.navigate('ChartScreen')
    }


    return (
        <SafeAreaView style={styles.root}>
        <ScrollView>
            <AppBar onPress={onProfilePress} />
            <Text style={{alignSelf:'center'}}>Hello {props.route.params.username}</Text>
            <CustomButton text="Create Event" disabled={false} onPress={onCreateEventPress}></CustomButton>
            <CustomButton text="See COVID Stats" disabled={false} onPress={onChartPress}></CustomButton>
            <CustomButton text="Logout" type ="SECONDARY" disabled={false} onPress={onLogOutPress}></CustomButton>
            <Text style={styles.header1}>My Invites</Text>
            <View style={{padding: 15}}>
            {events.map((event, index) => {
                return(
                    <View key={index} event={event} style={styles.eventContainer}>
                        <Text style={styles.eventName}>{event.eventName}</Text>
                        <Text style={{marginBottom: 5}}>{moment(event.Date).format("LLL")}</Text>
                        <Text>{event.description}</Text>
                        <Text style={{marginVertical: 5}}>Hosted by {event.owner}</Text>
                        <RsvpButton text="RSVP" onPress={() => onRsvpPress(event._id)}></RsvpButton>
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
    },
});

export default HomeScreen;