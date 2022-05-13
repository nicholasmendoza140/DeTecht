import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, Image, Pressable } from 'react-native';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native-web';
import DateTimePicker from '@react-native-community/datetimepicker';


const CreateEventScreen = (props) => {
    const [eventName, setName] = useState('');
    const [description, setDescription] = useState('');
    const [invitees, setInvitees] = useState('');
    const [date, setDate] = useState(new Date(Date.now()));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const username = props.route.params.username
    
    const navigation = useNavigation();
    console.log(date)

    const onChange = (event, selectedDate) => {
        setShow(true);
        console.log(selectedDate)
        setDate(selectedDate)
    };
    
    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };
    
    const showDatepicker = () => {
        showMode('date');
    };
    
    const showTimepicker = () => {
        showMode('time');
    };
    
    const onCreateEventPress = () => {
        var inviteArray = invitees.split(",");
        console.warn("onCreateEventPress")
        fetch("http://10.0.0.185:3000/createevent", {
            method: "POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                owner: username,
                Date: date,
                eventName: eventName,
                description: description,
                invited: inviteArray,
            })
        })
        .then(res => {
            res.text()
        })
        .then(data =>{
            Alert.alert("Event Created!")
            console.log(data);
            navigation.navigate("Home", {username: username})
        }).catch(err => {
            console.log("error", err)
        })

    }
    return (
        <View style={styles.root}>
            <Text style={styles.title}>Create Event</Text>
            <CustomInput 
                placeholder="Event Name" 
                value={eventName} 
                setValue={setName}
                autoCapitalize={'none'}
            />   
            <View style={styles.align}>
                <CustomButton onPress={showDatepicker} text="Event Date" />
                <View style={styles.space}></View>
                <CustomButton onPress={showTimepicker} text="Event Time" />
            </View>
            {show && (
                <DateTimePicker
                    style={{width: '25%', alignSelf: 'center'}}
                    testID="dateTimePicker"
                    value={date}
                    display="default"
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                />
             )}
            <Text>selected: {date.toLocaleString()}</Text>
            <CustomInput 
                placeholder="Event Description" 
                value={description} 
                setValue={setDescription}
                autoCapitalize={'none'}
            />
            <CustomInput 
                placeholder="Invite Guests (e.g guest1,guest2)" 
                value={invitees} 
                setValue={setInvitees}
                autoCapitalize={'none'}
            />
            <CustomButton onPress={onCreateEventPress} disabled={false} text="Create Event" />
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
    },
    align: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    space: {
        width: 10
    },
});

export default CreateEventScreen;