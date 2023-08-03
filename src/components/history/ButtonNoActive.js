import React from "react";
import {View, TouchableOpacity, StyleSheet, Text} from "react-native"
import { color } from "react-native-reanimated";

export default function ButtonNoActive(props) {
    return (
        <View>
            <TouchableOpacity style= {styles.button}>
                <Text style= {
                    {
                        color: '#3F2E3E', 
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
        backgroundColor: "#F5F5F5",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 15,
        elevation: 0.5, // Shadow for Android
        

    }
})