import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useQuery } from "@tanstack/react-query";
import { autocompletePlace } from "../../api/mapAPI";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

export default function FindResult({ place }) {
	const router = useRouter();

	const {
		data: prediction,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["autocompelte", "prediction", place],
		queryFn: () => autocompletePlace(place),
	});

	const handleNavigate = (description) => {
		router.push(`find/map?place=${description}`);
	};

	console.log(prediction);

	return (
		<View className="bg-white px-[20px] pt-[11px]">
			<View className="flex flex-col">
				{prediction &&
					prediction.length > 0 &&
					prediction.map((item) => (
						<TouchableOpacity
							onPress={() => handleNavigate(item.description)}
						>
							<View className="flex flex-row mb-[20px]">
								<View className="flex flex-col justify-start items-center">
									<View className="w-[25px] p-[3px] mt-[7px] rounded-full bg-[#00B14F] flex justify-center items-center">
										<Ionicons
											name="location-sharp"
											size={17}
											color="white"
										/>
									</View>
								</View>
								<View className="flex flex-row justify-between border-[#EFEFEF] border-b-[1.5px] ml-[10px] pb-[20px]">
									<View className="flex flex-col justify-center w-[262px] max-w-[262px]">
										<Text className="text-[16px] font-bold">
											{
												item.structured_formatting
													.main_text
											}
										</Text>
										<Text className="text-[13px] text-ellipsis overflow-hidden whitespace-nowrap w-full">
											{item.description}
										</Text>
									</View>
									<View className="w-[19px] flex flex-col justify-start items-center pt-[10px] ml-[30px]">
										<Ionicons
											name="bookmark-outline"
											size={17}
											color="black"
										/>
									</View>
								</View>
							</View>
						</TouchableOpacity>
					))}
				{/* <View className="flex flex-row mb-[20px]">
					<View className="flex flex-col justify-start items-center">
						<View className="w-[25px] p-[3px] mt-[7px] rounded-full bg-[#00B14F] flex justify-center items-center">
                        <Ionicons
                        name="location-sharp"
								size={17}
								color="white"
							/>
                            </View>
					</View>
					<View className="flex flex-row justify-between border-[#EFEFEF] border-b-[1.5px] ml-[10px] pb-[20px]">
						<View className="flex flex-col justify-center w-[262px] max-w-[262px]">
							<Text className="text-[16px] font-bold">
								University of Science - Nguyen Van Cu Campus
							</Text>
							<Text className="text-[13px]">
								5.34km . Pick up/Drop off Gate, 227 Nguyễn Văn
								Cừ
							</Text>
							<View className="bg-[#D9FCDE] p-[2px] pt-[0.5px] mt-[5px] w-[90px] rounded-[7px] font-[600] flex flex-row justify-center">
								<Text className="text-[13.5px]">
									Recent Used
								</Text>
							</View>
						</View>
						<View className="w-[19px] flex flex-col justify-start items-center pt-[10px] ml-[30px]">
							<Ionicons
								name="bookmark-outline"
								size={17}
								color="black"
							/>
						</View>
					</View>
				</View>
				<View className="flex flex-row mb-[20px]">
					<View className="flex flex-col justify-start items-center">
						<View className="w-[25px] p-[3px] mt-[7px] rounded-full bg-[#00B14F] flex justify-center items-center">
							<Ionicons
								name="location-sharp"
								size={17}
								color="white"
							/>
						</View>
					</View>
					<View className="flex flex-row justify-between border-[#EFEFEF] border-b-[1.5px] ml-[10px] pb-[20px]">
						<View className="flex flex-col justify-center w-[262px] max-w-[262px]">
							<Text className="text-[16px] font-bold">
								University of Science - Nguyen Van Cu Campus
							</Text>
							<Text className="text-[13px]">
								5.34km . Pick up/Drop off Gate, 227 Nguyễn Văn
								Cừ
							</Text>
							<View className="bg-[#D9FCDE] p-[2px] pt-[0.5px] mt-[5px] w-[90px] rounded-[7px] font-[600] flex flex-row justify-center">
								<Text className="text-[13.5px]">
									Recent Used
								</Text>
							</View>
						</View>
						<View className="w-[19px] flex flex-col justify-start items-center pt-[10px] ml-[30px]">
							<Ionicons
								name="bookmark-outline"
								size={17}
								color="black"
							/>
						</View>
					</View>
				</View> */}
			</View>
		</View>
	);
}
