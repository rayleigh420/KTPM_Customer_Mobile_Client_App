import React from "react";
import {View, Text, StyleSheet} from "react-native"
import Button from "./Button";
import ButtonNoActive from "./ButtonNoActive";

const NavigationHistory = () => {
    return (
        <View style= {styles.container}>
            <Button title={"Transport"}/>
            <ButtonNoActive title={"Food"}/>
            <ButtonNoActive title={"Market"}/>
            <ButtonNoActive title={"Financial"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20, 
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-around", 
        marginLeft: 15, 
        marginRight: 15, 
    }
})

export default NavigationHistory; 