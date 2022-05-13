import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import AppBar from '../components/AppBar';
import ProfileScreen from '../screens/ProfileScreen';
import CreateEventScreen from '../screens/CreateEventScreen/CreateEventScreen';
import VaccUploadScreen from '../screens/VaccUploadScreen/VaccUploadScreen';
import GuestListScreen from '../screens/GuestListScreen/GuestListScreen';
import ChartScreen from '../screens/ChartScreen/ChartScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer theme={Theme}>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignInScreen} />
                <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUpScreen} />
                <Stack.Screen 
                    options={{headerShown: false}}
                    /*options={{
                        header: () => {
                            return (
                                <AppBar/>
                            )
                        }, 
                    }}*/
                    name="Home" 
                    component={HomeScreen} 
                />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
                <Stack.Screen name="VaccUpload" component={VaccUploadScreen} />
                <Stack.Screen name="GuestList" component={GuestListScreen} />
                <Stack.Screen name="ChartScreen" component={ChartScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white'
    }
}

export default Navigation