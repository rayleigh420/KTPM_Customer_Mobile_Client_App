import { View, Text, PermissionsAndroid, Pressable, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import { useQuery } from '@tanstack/react-query';
import { calculateDistance, getCoordinates } from '../../api/mapAPI';
import { useNavigation, useRouter } from 'expo-router';
import { EXPO_PUBLIC_MAP_APIKEY } from "@env";

export default function ViewMap({ targetAddress }) {
    const [location, setLocation] = useState(null);
    const navigation = useNavigation();

    const { data: desCoor, isLoading, isError } = useQuery({
        queryKey: ["find", targetAddress],
        queryFn: () => getCoordinates(targetAddress)
    })

    const { data: distance } = useQuery({
        queryKey: ["distance", targetAddress],
        queryFn: () => calculateDistance({
            origin: location,
            destination: desCoor
        }),
    })

    useEffect(() => {
        (async () => {
            try {

                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    navigation.goBack();
                    console.log("Fail")
                    return;
                }

                let location = await Location.getCurrentPositionAsync({});
                setLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                });
            } catch (error) {
                console.log(error)
                navigation.goBack();
            }
        })();
    }, []);

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
                                latitude: location.latitude,
                                longitude: location.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            <MapViewDirections
                                origin={desCoor}
                                destination={{
                                    latitude: location.latitude,
                                    longitude: location.longitude,
                                }}
                                apikey={EXPO_PUBLIC_MAP_APIKEY}
                                strokeWidth={7}
                                strokeColor="#00B0FF"
                            />
                            <Marker
                                coordinate={{
                                    latitude: location.latitude,
                                    longitude: location.longitude,
                                }}
                                title={"Current Location " + distance}
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