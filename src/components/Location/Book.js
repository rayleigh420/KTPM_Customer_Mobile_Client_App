import { View, Text } from "react-native";
import React from "react";
import { Entypo, Feather, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { getPrice } from "../../api/bookAPI";
import { TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import classNames from "classnames";
import { useSocket } from "../../utils/SocketContext";
import { useRouter } from "expo-router";
// import { storeData } from "../../utils/asyncStorage";

export default function Book({ distance, data }) {
	const [type, setType] = useState("bike");
	const { socketRef, connectSocket, disconnectSocket } = useSocket();
	const navigation = useRouter();
	const [status, setStatus] = useState(true)

	// console.log("data: ", data);

	const {
		data: prices,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["price", distance],
		queryFn: () => getPrice(distance),
	});

	const handleChose = (type) => {
		console.log(type);
		setType(type);
	};

	// const data1 = {
	// 	...data,
	// 	"price": "10000",
	// 	"vehicleType": "motorbike",
	// 	"paymentMethod": "cash"
	// }

	// console.log("Data1: ", data1);

	const connect = () => {
		connectSocket();
		socketRef.current.emit("createBooking", {
			...data,
			"price": "10000",
			"vehicleType": "motorbike",
			"paymentMethod": "cash"
		});
		//if neu co moi push 
		navigation.push({
			pathname: "/progressRide",
		});
	}



	return (
		<View className="flex flex-col bg-white py-[20px] rounded-t-[15px]">
			<TouchableOpacity
				onPress={() => handleChose("bike")}
				className={classNames(
					"flex flex-row justify-between items-center min-w-[350px] px-[25px] py-[20px]",
					{ "bg-[#EEFAFA]": type == "bike" }
				)}
			>
				<View className="flex flex-row items-center">
					<FontAwesome5 name="motorcycle" size={27} color="#00B14F" />
					<Text className="ml-[20px] font-bold text-[17px]">
						GrabBike
					</Text>
				</View>
				<View>
					<Text className="font-bold text-[17px]">
						{new Intl.NumberFormat("vi-VN", {
							style: "currency",
							currency: "VND",
						}).format(prices?.motorbikeCost || 0)}
					</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleChose("car")}
				className={classNames(
					"flex flex-row justify-between items-center min-w-[350px] px-[25px] py-[20px]",
					{ "bg-[#EEFAFA]": type == "car" }
				)}
			>
				<View className="flex flex-row items-center">
					<FontAwesome name="car" size={27} color="#00B14F" />
					<Text className="ml-[20px] font-bold text-[17px]">
						GrabCar
					</Text>
				</View>
				<View>
					<Text className="font-bold text-[17px]">
						{new Intl.NumberFormat("vi-VN", {
							style: "currency",
							currency: "VND",
						}).format(prices?.carCost) || 0}
					</Text>
				</View>
			</TouchableOpacity>
			<View className="flex flex-row justify-center items-center gap-[10px] mt-[10px]">
				<View className="bg-[#EEFAFA] px-[30px] py-[20px] rounded-[50px] min-w-[165px] justify-center items-center">
					<Text className="text-[17px] font-bold">GrabNow</Text>
				</View>
				<View className="bg-[#00B14F] px-[30px] py-[20px] rounded-[50px] min-w-[165px] justify-center items-center">
					<TouchableOpacity className="text-[17px] font-bold text-white" onPress={connect}>
						<Text>
							BOOK
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
