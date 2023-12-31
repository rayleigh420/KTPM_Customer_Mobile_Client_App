import {
	View,
	Text,
	Pressable,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
	Stack,
	useLocalSearchParams,
	usePathname,
	useNavigation,
	useRouter,
} from "expo-router";
import { Entypo } from "@expo/vector-icons";
import ViewMap from "../../src/components/Map/ViewMap";
import PickUp from "../../src/components/Location/PickUp";
import Book from "../../src/components/Location/Book";
import { Touchable } from "react-native-web";

export default function Map() {
	const [pickBook, setPickBook] = useState(false);
	const [distance, setDistance] = useState(0);

	const { place } = useLocalSearchParams();

	console.log("Place: ", place);
	const navigation = useNavigation();

	return (
		<View className="h-full relative">
			<Stack.Screen
				options={{
					title: "",
					headerShadowVisible: false,
					headerTransparent: true,

					headerLeft: () => {
						return (
							<TouchableOpacity
								onPress={() => navigation.goBack()}
							>
								<View className="rounded-full min-w-[25px] min-h-[25px] bg-white flex justify-center items-center ml-[5px] shadow-2xl">
									<Entypo
										name="chevron-thin-left"
										size={14}
										color="black"
									/>
								</View>
							</TouchableOpacity>
						);
					},
				}}
			/>
			<ViewMap
				className=""
				targetAddress={place}
				setDistance={setDistance}
			/>
			{!pickBook ? (
				<PickUp setPickBook={setPickBook} distance={distance} />
			) : (
				<Book distance={distance} />
			)}
		</View>
	);
}
