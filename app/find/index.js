import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo, Feather, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import SavedPlaces from "../../src/components/Places/SavedPlaces";
import FrequentlyPlaces from "../../src/components/Places/FrequentlyPlaces";
import FindResult from "../../src/components/Location/FindResult";
import useDebounce from "../../src/hooks/useDebounce";

export default function Location() {
	const [place, setPlace] = useState("");
	const debouncedValue = useDebounce(place, 3000);

	const changePlace = (e) => {
		setPlace(e);
	};

	return (
		<View className="h-full">
			<Stack.Screen
				options={{
					title: "",
					headerTitleStyle: {
						fontWeight: "450",
						fontSize: "16px",
					},
					headerRight: () => {
						return (
							<View className="flex flex-row min-w-[330px] pl-[20px] items-center">
								<View className="min-w-[25px] flex justify-center items-center mr-[3px] mt-[3px]">
									<FontAwesome
										name="circle-o"
										size={20}
										color="#126FD7"
									/>
								</View>
								<Text className="text-[16px] font-normal">
									Current Location
								</Text>
							</View>
						);
					},
					headerShadowVisible: false,
				}}
			/>

			{/* Input */}
			<View className="flex flex-row justify-end bg-white pb-[10px] pt-[3px]">
				<View className="min-w-[35px] p-[3px] rounded-l-[7px] text-red-500 flex justify-center bg-[#F5F5F5] mr-[-7.5px] pl-[10px]">
					<Ionicons name="location-sharp" size={22} color="red" />
				</View>
				<TextInput
					onChangeText={(e) => changePlace(e)}
					placeholder="Where to?"
					value={place}
					className="bg-[#F5F5F5] min-w-[230px] max-w-[230px] pr-[10px] pl-[10px] py-[11px] border-none text-[16px] rounded-r-[7px]"
				/>
				<View className="flex justify-center items-center px-[25px] ">
					<Ionicons
						name="add-circle-outline"
						size={24}
						color="black"
					/>
					<Text>Add</Text>
				</View>
			</View>

			<ScrollView showsVerticalScrollIndicator={false}>
				{place == "" ? (
					<>
						{/* Saved Placed */}
						<SavedPlaces place={place} />

						{/* Frequently used */}
						<FrequentlyPlaces />
					</>
				) : (
					<FindResult place={debouncedValue} />
				)}
			</ScrollView>
		</View>
	);
}
