import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { ScrollView, TextInput } from "react-native-gesture-handler";

export default function Location() {
	return (
		<View className="h-full">
			<Stack.Screen
				options={{
					title: "Current location",
					headerTitleStyle: {
						fontWeight: "400",
						fontSize: "17px",
						// headerTitleAlign: "11px"
					},
					headerShadowVisible: false,
					// headerTitleAlign: "100px"
				}}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View className="flex flex-row justify-end bg-white pb-[10px] pt-[3px]">
					{/* <View className="max-w-[20px] text-red-500">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</View> */}
					<View className="min-w-[35px] p-[3px] rounded-l-[7px] text-red-500 flex justify-center bg-[#F5F5F5] mr-[-2px] pl-[10px]">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
							<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
						</svg>

					</View>
					<TextInput
						placeholder="Where to?"
						className="bg-[#F5F5F5] min-w-[250px] pl-[10px] py-[11px] border-none text-[18px] focus:border-none rounded-r-[7px]"
					/>
					<View className="flex justify-center items-center px-[25px] ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<Text>Add</Text>
					</View>
				</View>

				<View className='bg-white px-[20px] mt-[13px]'>
					<View className="flex flex-row justify-between pt-[37px] pb-[20px]">
						<Text className="text-[17px] font-bold">Saved Places</Text>
						<Text className="text-[16px] font-bold text-[#166ECF]">View All</Text>
					</View>
					<View className="flex flex-col">
						<View className="flex flex-row mb-[20px]">
							<View className="flex flex-col justify-start items-center">
								<View className="w-[25px] p-[3px] mt-[7px] rounded-full bg-[#00B14F] text-white">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
										<path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
									</svg>
								</View>
							</View>
							<View className="flex flex-row justify-between border-[#EFEFEF] border-b-[1px] ml-[10px] pb-[20px]">
								<View className="flex flex-col justify-center">
									<Text className='text-[17px] font-bold'>Huỳnh Sơn</Text>
									<Text className='text-[13.5px]'>5.34km . Pick up/Drop off Gate, 227 Nguyễn</Text>
									<View className="bg-[#D9FCDE] p-[2px] mt-[5px] w-[95px] rounded-[7px] font-[600] flex flex-row justify-center">
										<Text >Rencent Used</Text>
									</View>
								</View>
								<View className='w-[25px] flex flex-col justify-start items-center pt-[10px] ml-[50px]'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
									</svg>
								</View>
							</View>
						</View>
						<View className="flex flex-row mb-[20px]">
							<View className="flex flex-col justify-start items-center">
								<View className="w-[25px] p-[3px] mt-[7px] rounded-full bg-[#00B14F] text-white">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
										<path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
									</svg>
								</View>
							</View>
							<View className="flex flex-row justify-between border-[#EFEFEF] border-b-[3px] ml-[10px] pb-[20px]">
								<View className="flex flex-col justify-center">
									<Text className='text-[17px] font-bold'>Huỳnh Sơn</Text>
									<Text className='text-[13.5px]'>5.34km . Pick up/Drop off Gate, 227 Nguyễn</Text>
									<View className="bg-[#D9FCDE] p-[2px] mt-[5px] w-[95px] rounded-[7px] font-[600] flex flex-row justify-center">
										<Text >Rencent Used</Text>
									</View>
								</View>
								<View className='w-[25px] flex flex-col justify-start items-center pt-[10px] ml-[50px]'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
									</svg>
								</View>
							</View>
						</View>
					</View>

				</View>
			</ScrollView>
		</View>
	);
}
