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
    const [date, setDate] = useState(new Date(Date.now()));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const username = props.route.params.username
    
    const navigation = useNavigation();

    const onChange = (selectedDate) => {
        setShow(true);
        setDate(selectedDate);
    };
    
    const showMode = (currentMode) => {
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
        console.warn("onCreateEventPress")
        fetch("http://10.250.144.231:3000/createevent", {
            method: "POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                eventName: eventName,
                description: description,
            })
        })
        .then(res => {
            res.text()
        })
        .then(data =>{
            Alert.alert('${data.eventName} is valid!')
            Alert.alert('${data.description} is valid!')
            navigation.navigate("Home", {username:username})
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
            <CustomButton onPress={onCreateEventPress} text="Create Event" />
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