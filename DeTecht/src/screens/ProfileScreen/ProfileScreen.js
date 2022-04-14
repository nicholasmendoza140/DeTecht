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