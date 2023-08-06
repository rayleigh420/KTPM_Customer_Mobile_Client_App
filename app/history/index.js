import React from "react";
import { View, Text, StyleSheet } from "react-native"
import NavigationHistory from "../../src/components/history/NavigationHistory";
import CardItemHistory from "../../src/components/history/CardItemHistory";



export default function History() {
    return (
        <View>
            {/* header  */}
            <NavigationHistory />

            {/* content  */}
            <View style= {
                {
                    marginTop: 20, 
                }
            }>
                <CardItemHistory />
                <CardItemHistory />
                <CardItemHistory />
            </View>
        </View>

    )
}