import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo, Feather, FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function Location() {
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
									<FontAwesome name="circle-o" size={20} color="#126FD7" />
								</View>
								<Text className="text-[16px] font-normal">Current Location</Text>
							</View>
						)
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
					placeholder="Where to?"
					className="bg-[#F5F5F5] min-w-[230px] pl-[10px] py-[11px] border-none text-[16px] rounded-r-[7px]"
				/>
				<View className="flex justify-center items-center px-[25px] ">
					<Ionicons name="add-circle-outline" size={24} color="black" />
					<Text>Add</Text>
				</View>
			</View>

			<ScrollView showsVerticalScrollIndicator={false}>
				{/* Saved Placed */}
				<View className='bg-white px-[20px] mt-[11px]'>
					<View className="flex flex-row justify-between pt-[37px] pb-[20px]">
						<Text className="text-[16px] font-bold">Saved Places</Text>
						<Text className="text-[15px] font-bold text-[#166ECF]">View All</Text>
					</View>
					<View className="flex flex-col">
						<Link href="find/map" className="mb-[20px]">
							<View className="flex flex-row mb-[20px]">
								<View className="flex flex-col justify-start items-center">
									<View className="w-[25px] p-[3px] mt-[7px] rounded-full bg-[#00B14F] flex justify-center items-center">
										<Ionicons name="bookmark-sharp" size={17} color="white" />
									</View>
								</View>
								<View className="flex flex-row justify-between border-[#EFEFEF] border-b-[1.5px] ml-[10px] pb-[20px]">
									<View className="flex flex-col justify-center w-[262px] max-w-[262px]">
										<Text className='text-[16px] font-bold'>Huỳnh Sơn</Text>
										<Text className='text-[13px]'>5.34km . Pick up/Drop off Gate, 227 Nguyễn</Text>
										<View className="bg-[#D9FCDE] p-[2px] pt-[0.5px] mt-[5px] w-[90px] rounded-[7px] font-[600] flex flex-row justify-center">
											<Text className="text-[13.5px]">Recent Used</Text>
										</View>
									</View>
									<View className='w-[19px] flex flex-col justify-start items-center pt-[10px] ml-[30px]'>
										<Feather name="edit" size={17} color="black" />
									</View>
								</View>
							</View>
						</Link>

						<View className="flex flex-row mb-[20px]">
							<View className="flex flex-col justify-start items-center">
								<View className="w-[25px] p-[3px] rounded-full bg-[#00B14F] flex justify-center items-center">
									<Entypo name="home" size={18} color="white" />
								</View>
							</View>
							<View className="flex flex-row justify-between border-[#EFEFEF] border-b-[1.5px] ml-[10px] pb-[20px]">
								<View className="flex flex-col justify-center w-[262px] max-w-[262px]">
									<Text className='text-[16px] font-bold'>Add Home</Text>
								</View>
							</View>
						</View>

						<View className="flex flex-row mb-[20px]">
							<View className="flex flex-col justify-start items-center">
								<View className="w-[25px] p-[3px] rounded-full bg-[#00B14F] flex justify-center items-center">
									<Entypo name="suitcase" size={17} color="white" />
								</View>
							</View>
							<View className="flex flex-row justify-between border-[#EFEFEF] border-b-[1.5px] ml-[10px] pb-[20px]">
								<View className="flex flex-col justify-center w-[262px] max-w-[262px]">
									<Text className='text-[16px] font-bold'>Add Work</Text>
								</View>
							</View>
						</View>

						<View className="flex flex-row mb-[20px]">
							<View className="flex flex-col justify-start items-center">
								<View className="w-[25px] p-[3px] mt-[7px] rounded-full bg-[#00B14F] flex justify-center items-center">
									<Ionicons name="add" size={16} color="white" />
								</View>
							</View>
							<View className="flex flex-row justify-between border-[#EFEFEF] border-b-[1.5px] ml-[10px] pb-[20px]">
								<View className="flex flex-col justify-center w-[262px] max-w-[262px]">
									<Text className='text-[16px] font-bold'>Add new</Text>
									<Text className='text-[13px]'>Save your favourite places</Text>
								</View>
							</View>
						</View>
					</View>
				</View>

				{/* Frequently used */}
				<View className='bg-white px-[20px] mt-[11px]'>
					<View className="flex flex-row justify-between pt-[37px] pb-[20px]">
						<Text className="text-[16px] font-bold">Frequently used</Text>
					</View>
					<View className="flex flex-col">
						<View className="flex flex-row mb-[20px]">
							<View className="flex flex-col justify-start items-center">
								<View className="w-[25px] p-[3px] mt-[7px] rounded-full bg-[#00B14F] flex justify-center items-center">
									<Ionicons name="location-sharp" size={17} color="white" />
								</View>
							</View>
							<View className="flex flex-row justify-between border-[#EFEFEF] border-b-[1.5px] ml-[10px] pb-[20px]">
								<View className="flex flex-col justify-center w-[262px] max-w-[262px]">
									<Text className='text-[16px] font-bold'>University of Science - Nguyen Van Cu Campus</Text>
									<Text className='text-[13px]'>5.34km . Pick up/Drop off Gate, 227 Nguyễn Văn Cừ</Text>
									<View className="bg-[#D9FCDE] p-[2px] pt-[0.5px] mt-[5px] w-[90px] rounded-[7px] font-[600] flex flex-row justify-center">
										<Text className="text-[13.5px]">Recent Used</Text>
									</View>
								</View>
								<View className='w-[19px] flex flex-col justify-start items-center pt-[10px] ml-[30px]'>
									<Ionicons name="bookmark-outline" size={17} color="black" />
								</View>
							</View>
						</View>
						<View className="flex flex-row mb-[20px]">
							<View className="flex flex-col justify-start items-center">
								<View className="w-[25px] p-[3px] mt-[7px] rounded-full bg-[#00B14F] flex justify-center items-center">
									<Ionicons name="location-sharp" size={17} color="white" />
								</View>
							</View>
							<View className="flex flex-row justify-between border-[#EFEFEF] border-b-[1.5px] ml-[10px] pb-[20px]">
								<View className="flex flex-col justify-center w-[262px] max-w-[262px]">
									<Text className='text-[16px] font-bold'>University of Science - Nguyen Van Cu Campus</Text>
									<Text className='text-[13px]'>5.34km . Pick up/Drop off Gate, 227 Nguyễn Văn Cừ</Text>
									<View className="bg-[#D9FCDE] p-[2px] pt-[0.5px] mt-[5px] w-[90px] rounded-[7px] font-[600] flex flex-row justify-center">
										<Text className="text-[13.5px]">Recent Used</Text>
									</View>
								</View>
								<View className='w-[19px] flex flex-col justify-start items-center pt-[10px] ml-[30px]'>
									<Ionicons name="bookmark-outline" size={17} color="black" />
								</View>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}
