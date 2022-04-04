import React, {useState} from 'react';
import { SafeAreaView, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = (props) => {
    const username = props.route.params.username

    return (
        <SafeAreaView>
            <Text>Profile</Text>
            <Text>{username}</Text>
        </SafeAreaView>
    )
}

export default ProfileScreen