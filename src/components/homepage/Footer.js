import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


const Footer = () => {
    return (
      
        <View style= {
            {
                height: 150, 
                backgroundColor: 'red'
            }
        }>
            <Text>
                Footer
            </Text>
        </View>
    )
}


export default Footer; 
