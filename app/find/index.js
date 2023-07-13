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
					{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
						<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
					</svg> */}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
						<path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
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
									{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
										<path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
									</svg> */}
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
										<path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
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
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
										<path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
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
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
										<path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
									</svg>
								</View>
							</View>
						</View>

						<View className="flex flex-row mb-[20px]">
							<View className="flex flex-col justify-start items-center">
								<View className="w-[25px] p-[3px] rounded-full bg-[#00B14F] text-white">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
										<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
										<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
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
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
										<path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
										<path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
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
