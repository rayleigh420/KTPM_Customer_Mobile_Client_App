import React from "react";
import {
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, useNavigation, useRouter } from "expo-router";

const SearchBar = () => {
	const router = useRouter();
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => router.push("/find")}
		>
			{/* <Link href="/find"> */}
			<Ionicons
				name="location"
				size={24}
				color="red"
				style={styles.iconLocation}
			/>
			<Text style={styles.buttonText}>Where to?</Text>
			{/* </Link> */}
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		top: -20,
		backgroundColor: "white",
		paddingHorizontal: 10,
		padding: 10,
		paddingTop: 15,
		paddingBottom: 15,
		marginLeft: 10,
		marginRight: 10,
		borderRadius: 13,
		shadowRadius: 4,
		borderRadius: 8,
		marginBottom: 10,
		shadowColor: "rgba(0, 0, 0, 0.3)",
		shadowOffset: { width: 30, height: 50 },
		shadowOpacity: 0.8,
		elevation: 13, // Chỉ áp dụng cho Android
	},
	buttonText: {
		marginLeft: 8,
		fontSize: 20,
		color: "#3d3d3d",
		fontWeight: 300,
	},
});

export default SearchBar;
