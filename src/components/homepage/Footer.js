import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();


const Footer = () => {
    return (

        <View style={
            {
                height: 150,
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
            }
        }>
            <View style= {{
                padding: 20, 
                width: "90%", 
                backgroundColor: "#E4E4D0", 
                display: "flex", 
                flexDirection: "row", 
                alignItems: "center", 
                justifyContent: "flex-start",
                borderRadius: 8, 
                opacity: 0.9, 
            }}>
                <Icon name="user" size={30} color="blue" />
                <Text style= {{
                    marginLeft: 10, 
                }}>
                    Hire a driver by the hour
                </Text>

            </View>

            <View style= {{
                width: "90%", 
                display: "flex", 
                flexDirection: "row", 
                alignItems: "center", 
                justifyContent: "space-between", 
                marginTop: 15, 
            }}>
                <Text style= {{
                    fontSize: 18, 
                    fontWeight: 500, 
                    opacity: 0.9, 
                }}>
                    Ride to Saved Places
                </Text>

                <Icon name="arrow-right" size={20} color="black" />
            </View>
        </View>
    )
}


export default Footer; 
