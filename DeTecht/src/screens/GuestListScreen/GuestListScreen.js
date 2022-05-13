import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, Image, Pressable } from 'react-native';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


const GuestListScreen = (props) => {

    const eventName = props.route.params.eventName
    const [guestList, setGuestList] = useState({
        _id: '',
        owner: '',
        attending: [],
    })

    const checkGuest = () => {
        fetch("http://10.0.0.185:3000/guests", {
            method: "POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                eventName: eventName
            })
        }) 
        .then(res => {
            if (res.ok)
            {
                return res.json();
            }
            
        })
        .then(jsonRes => setGuestList(jsonRes))
    }

    useEffect(() => {
        checkGuest()
        console.log(eventName)
    }, [])

    console.log(guestList)
    console.log(guestList.attending)
    return (
        <SafeAreaView>
            
            {guestList.attending.map((guest, index) => {
                return(
                    <View>
                        <Text style={styles.name} key={index}>{guest}</Text>
                        <View style={{borderBottomColor: 'grey', borderBottomWidth: 1}}></View>
                    </View>
                    
            )})}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    name: {
        padding: 10,
        marginTop: 15,
        marginLeft: 8,
        fontSize: 20,
        fontWeight: 'bold',
    },
})    

export default GuestListScreen;