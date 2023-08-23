import {
	View,
	Text,
	PermissionsAndroid,
	Pressable,
	StyleSheet,
	ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import { useQuery } from "@tanstack/react-query";
import { calculateDistance, getCoordinates } from "../../api/mapAPI";
import { useNavigation, useRouter } from "expo-router";
import { EXPO_PUBLIC_MAP_APIKEY } from "@env";

export default function ViewMap({ targetAddress, setDistance }) {
	const [location, setLocation] = useState(null);
	const navigation = useNavigation();

	const {
		data: desCoor,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["find", targetAddress],
		queryFn: () => getCoordinates(targetAddress),
	});

	// console.log("Location: ", location)

	const { data: distance } = useQuery({
		queryKey: ["distance", targetAddress, location, desCoor],
		queryFn: () => {
			if (location) {
				return calculateDistance({
					origin: location,
					destination: desCoor,
				});
			} else {
				return () => {
					return 0;
				};
			}
		},
		onSuccess: (data) => {
			setDistance(data);
		},
	});

	// console.log(distance)

	useEffect(() => {
		(async () => {
			try {
				let { status } =
					await Location.requestForegroundPermissionsAsync();
				if (status !== "granted") {
					setErrorMsg("Permission to access location was denied");
					navigation.goBack();
					console.log("Fail");
					return;
				}

				let result = await Location.getCurrentPositionAsync({});
				setLocation({
					latitude: result.coords.latitude,
					longitude: result.coords.longitude,
				});
			} catch (error) {
				console.log(error);
				navigation.goBack();
			}
		})();
	}, []);

	return (
		<View className="flex-1">
			{location != null ? (
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
						title={"Current Location " + distance + " km"}
					/>
					<Marker coordinate={desCoor} title="Destination Location" />
				</MapView>
			) : (
				<View className="h-full flex justify-center items-center">
					<ActivityIndicator size="large" color="#00B14F" />
				</View>
			)}
		</View>
	);
}
