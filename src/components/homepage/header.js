import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const Header = () => {


    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://rubee.com.vn/admin/webroot/upload/image//images/tin-tuc/grab-logo-2(1).jpg" }}
                style={styles.backgroundImage}
            />
            <View style={styles.intro}>
                <Text style={styles.title}>Transport</Text>
                <Text style={styles.content}>
                    Wherever you're going, let's get you there!
                </Text>
            </View>

            <TouchableOpacity style={styles.mapButton}>
                <Ionicons name="map" size={24} color="black" />
                <Text style={styles.buttonText}>Map</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        height: 150,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', 
    },
    intro: {
        marginRight: 0,
        marginLeft: 20,
        width: 195,
        marginTop: 8, 
    },
    title: {
        fontSize: 25,
        fontWeight: 500,
        opacity: 0.9, 
    }
    ,
    content: {
        fontSize: 16,
        color: '#3d3d3d',
    },
    mapButton: {
        marginRight: 20,
        marginTop: 10, 
        height: 40,  
        paddingRight: 10, 
        paddingLeft: 10, 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#d2f5d7',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 4, // Chỉ áp dụng cho Android
        shadowRadius: 4, 
        borderRadius: 20, 
    },
    buttonText: {
        marginLeft: 7, 
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: 'stretch', // Tuỳ chọn tùy thuộc vào ý định của bạn: cover, contain, stretch, center, repeat, v.v.
        transform: [{ scaleX: -1 }],
        opacity: 0.7, 
    },
});

export default Header; 