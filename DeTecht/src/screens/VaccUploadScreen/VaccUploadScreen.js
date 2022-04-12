import React, {useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

const VaccUploadScreen = (props) => {
    const username = props.route.params.username
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[date1, setDate1] = useState('');
    const[vacc1, setVacc1] = useState('');
    const[vacc2, setVacc2] = useState('');
    const[date2, setDate2] = useState('');

    const onSubmitPress = (props) => {

    }
    
    return (
        <SafeAreaView style={styles.root}>
            <Text style={styles.title}>Upload Vaccine Record</Text>
            <Text style={{fontSize:18, fontWeight: 'bold', padding: 5}}>Name</Text>
            <CustomInput 
                placeholder="First Name" 
                value={firstName}
                setValue={setFirstName}
                autoCapitalize={'none'}
            />
            <CustomInput 
                placeholder="Last Name" 
                value={lastName}
                setValue={setLastName}
                autoCapitalize={'none'}
            />
            <Text style={{fontSize:18, fontWeight: 'bold', padding: 5}}>1st Dose</Text>
            <CustomInput
                type="date"
                placeholder="mm/dd/yy" 
                value={date1}
                setValue={setDate1}
                autoCapitalize={'none'}
            />
            <CustomInput 
                placeholder="Vaccine/Manufacturer1" 
                value={vacc1}
                setValue={setVacc1}
                autoCapitalize={'none'}
            />
            <Text style={{fontSize:18, fontWeight: 'bold', padding: 5}}>2nd Dose</Text>
            <CustomInput
                type="date"
                placeholder="mm/dd/yy" 
                value={date2}
                setValue={setDate2}
                autoCapitalize={'none'}
            />
            <CustomInput 
                placeholder="Vaccine/Manufacturer2" 
                value={vacc2}
                setValue={setVacc2}
                autoCapitalize={'none'}
            />
            <CustomButton text="Submit" onPress={onSubmitPress}></CustomButton>
        </SafeAreaView>
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






export default VaccUploadScreen;