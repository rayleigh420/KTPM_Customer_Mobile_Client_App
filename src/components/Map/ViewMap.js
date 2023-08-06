import { View, Text, PermissionsAndroid, Pressable, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import { useQuery } from '@tanstack/react-query';
import { getCoordinates } from '../../api/mapAPI';
import { useNavigation, useRouter } from 'expo-router';

export default function ViewMap({ targetAddress }) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    console.log(targetAddress)

    const { data: desCoor, isLoading, isError } = useQuery({
        queryKey: ["find"],
        queryFn: () => getCoordinates(targetAddress)
    })
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

    // let text = 'Waiting..';
    // if (errorMsg) {
    //     text = errorMsg;
    // } else if (location) {
    //     text = JSON.stringify(location);
    // }
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
                            <MapViewDirections
                                origin={desCoor}
                                destination={{
                                    latitude: location.coords.latitude,
                                    longitude: location.coords.longitude,
                                }}
                                apikey="AIzaSyCtogOBqVFXxTK6rcqW-RPuNFH1OkcUEUI"
                                strokeWidth={7}
                                strokeColor="#00B0FF"
                            />
                            <Marker
                                coordinate={{
                                    latitude: location.coords.latitude,
                                    longitude: location.coords.longitude,
                                }}
                                title="Current Location"
                            />
                            <Marker
                                coordinate={desCoor}
                                title="Destination Location"
                            />
                        </MapView>
                    )
                    :
                    <View className='h-full flex justify-center items-center'>
                        <ActivityIndicator size="large" color="#00B14F" />
                    </View>
            }
            <Text className="mt-[100px]">{JSON.stringify(targetAddress)}</Text>
        </View>
    )
}