import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Card = () => {
    const location = {
        title: 'Mien Dong Old Bus Station',
        address: '292 Đinh Bộ Lĩnh, P.26, Q.Bình Thạnh, HCM'
    }

    return (
        <View>
        <View style= {styles.container}>
            <Ionicons name="location" size={24} color={"white"} style= {styles.iconLocation} />
            <View>
                <Text style= {styles.title}>
                    {location.title}
                </Text>
                <Text style= {styles.address}>
                    {location.address}
                </Text>
            </View>
            <Ionicons  name="arrow-forward" size={24} color={"black"} style= {styles.iconNext}/>
        </View>
        <View style={styles.hrLine}>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        flexDirection: 'row', 
        marginLeft: 15,
        alignItems: 'center',
        marginBottom: 6, 
    }, 
    iconLocation: {
        marginRight: 8, 
        padding: 2,
        backgroundColor: 'green', 
        borderRadius: 70, 
    }, 
    title: {
        fontSize: 16, 
        fontWeight: 600,  
    }, 
    address: {
        marginTop: 2, 
        fontSize: 13, 
    }, 
    iconNext: {
        marginLeft: 9, 
    },  
    hrLine: {
        borderTopWidth: 1,
        borderTopColor: 'black',
        marginVertical: 10,
        marginLeft: 15, 
        marginRight: 15, 
        opacity: 0.2, 
      },
})

export default Card; 
