import React from "react";
import {View, TouchableOpacity, StyleSheet, Text} from "react-native"
import { color } from "react-native-reanimated";

export default function Button(props) {
    return (
        <View>
            <TouchableOpacity style= {styles.button}>
                <Text style= {
                    {
                        color: 'white', 
                        fontWeight: 600, 
                        fontSize: 16, 
                    }
                }>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#1A5D1A",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 15,
        elevation: 3, // Shadow for Android
        color: "white", 
        fontWeight: 500, 

    }
})