import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { ScrollView, TextInput } from "react-native-gesture-handler";

export default function Location() {
	return (
		<View className="h-full">
			<Stack.Screen
				options={{
					title: "⭕  Current location",
					headerTitleStyle: {
						fontWeight: "450",
						fontSize: "17px",
						// headerTitleAlign: "11px"
					},
					headerShadowVisible: false,
					headerTitleAlign: "left"
				}}
			/>
			{/* <ScrollView showsVerticalScrollIndicator={false}> */}
			<View className="flex flex-row justify-end bg-white pb-[10px] pt-[3px]">
				{/* <View className="max-w-[20px] text-red-500">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</View> */}
				<View className="min-w-[35px] p-[3px] rounded-l-[7px] text-red-500 flex justify-center bg-[#F5F5F5] mr-[-7.5px] pl-[10px]">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
						<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
					</svg>
				</View>
				<TextInput
					placeholder="Where to?"
					className="bg-[#F5F5F5] min-w-[250px] pl-[10px] py-[11px] border-none text-[17px] rounded-r-[7px]"
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

			<View className='bg-white px-[20px] mt-[11px]'>
				<View className="flex flex-row justify-between pt-[37px] pb-[20px]">
					<Text className="text-[17px] font-bold">Saved Places</Text>
					<Text className="text-[16px] font-bold text-[#166ECF]">View All</Text>
				</View>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View className="flex flex-col">
						<View className="flex flex-row mb-[20px]">
							<View className="flex flex-col justify-start items-center">
								<View className="w-[25px] p-[3px] mt-[7px] rounded-full bg-[#00B14F] text-white">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
										<path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
									</svg>
								</View>
							</View>
							<View className="flex flex-row justify-between border-[#EFEFEF] border-b-[1.5px] ml-[10px] pb-[20px]">
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
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
										<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
									</svg>
								</View>
							</View>
							<View className="flex flex-row justify-between border-[#EFEFEF] border-b-[1.5px] ml-[10px] pb-[20px]">
								<View className="flex flex-col justify-center max-w-[262px]">
									<Text className='text-[17px] font-bold'>University of Science - Nguyen Van Cu Campus</Text>
									<Text className='text-[13.5px]'>5.34km . Pick up/Drop off Gate, 227 Nguyễn Văn Cừ</Text>
									<View className="bg-[#D9FCDE] p-[2.5px] pt-[1px] mt-[5px] w-[95px] rounded-[7px] font-[600] flex flex-row justify-center">
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
								<View className="w-[25px] p-[3px] rounded-full bg-[#00B14F] text-white">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
									</svg>
								</View>
							</View>
							<View className="flex flex-row justify-between border-[#EFEFEF] border-b-[1.5px] ml-[10px] pb-[20px]">
								<View className="flex flex-col justify-center">
									<Text className='text-[17px] font-bold'>Add Home</Text>
									{/* <Text className='text-[13.5px]'>5.34km . Pick up/Drop off Gate, 227 Nguyễn</Text>
									<View className="bg-[#D9FCDE] p-[2px] mt-[5px] w-[95px] rounded-[7px] font-[600] flex flex-row justify-center">
										<Text >Rencent Used</Text>
									</View> */}
								</View>
								{/* <View className='w-[25px] flex flex-col justify-start items-center pt-[10px] ml-[50px]'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
									</svg>
								</View> */}
							</View>
						</View>

						<View className="flex flex-row mb-[20px]">
							<View className="flex flex-col justify-start items-center">
								<View className="w-[25px] p-[3px] rounded-full bg-[#00B14F] text-white">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
									</svg>
								</View>
							</View>
							<View className="flex flex-row justify-between border-[#EFEFEF] border-b-[1.5px] ml-[10px] pb-[20px]">
								<View className="flex flex-col justify-center">
									<Text className='text-[17px] font-bold'>Add Work</Text>
									{/* <Text className='text-[13.5px]'>5.34km . Pick up/Drop off Gate, 227 Nguyễn</Text>
									<View className="bg-[#D9FCDE] p-[2px] mt-[5px] w-[95px] rounded-[7px] font-[600] flex flex-row justify-center">
										<Text >Rencent Used</Text>
									</View> */}
								</View>
								{/* <View className='w-[25px] flex flex-col justify-start items-center pt-[10px] ml-[50px]'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
									</svg>
								</View> */}
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
			{/* </ScrollView> */}
		</View>
	);
}
