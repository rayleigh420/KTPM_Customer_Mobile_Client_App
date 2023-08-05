import { View, Text, PermissionsAndroid, Pressable, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation, useRouter } from 'expo-router';

export default function ViewMap() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    // const router = useRouter()
    const navigation = useNavigation();
    const router = useRouter();

    useEffect(() => {
        (async () => {
            try {

                let { status } = await Location.requestForegroundPermissionsAsync();
                console.log(status)
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    navigation.goBack();
                    console.log("Fail")
                    // router.back();
                    return;
                }

                let location = await Location.getCurrentPositionAsync({});
                setLocation(location);
            } catch (error) {
                console.log(error)
                navigation.goBack();
            }
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }
    return (
        <View
            className="flex-1"
        >
            {
                location ?
                    (
                        <MapView
                            className="w-full h-full"
                            initialRegion={{
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            <Marker
                                coordinate={{
                                    latitude: location.coords.latitude,
                                    longitude: location.coords.longitude,
                                }}
                                title="Current Location"
                            />
                        </MapView>
                    )
                    :
                    <View className='h-full flex justify-center items-center'>
                        <ActivityIndicator size="large" color="#00B14F" />
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});