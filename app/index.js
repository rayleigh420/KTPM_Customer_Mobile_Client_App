import { Redirect } from "expo-router";
import React from "react";

export default function App() {
	return <Redirect href="/home" />;
	// <View className="flex-1 items-center justify-center bg-white">
	//   <Text className="text-red-400">Router</Text>
	//   <Link href="/home" className="mt-[20px]">
	//     Home
	//   </Link>
	//   <Link href="/todo" className="mt-[20px]">
	//     Todo App
	//   </Link>
	//   <Link href="/testAPI" className="mt-[20px]">
	//     Test React Query
	//   </Link>
	//   <Link href="/signUp" className="mt-[20px]">
	//     SignUp
	//   </Link>
	//   <Link href="/signIn" className="mt-[20px] text-blue-500">
	//     SignIn
	//   </Link>
	//   <Link href="/typePass" className="mt-[20px] text-blue-500">
	//     TypePass
	//   </Link>
	//   <Link href="/profile" className="mt-[20px] text-blue-500">
	//     Profile
	//   </Link>
	//   <Link href="/find" className="mt-[20px]">
	//     Find Location
	//   </Link>
	//   <Link href="/signInInput" className="mt-[20px]">
	//     signInInput
	//   </Link>
	//   <Link href="/forgotPass" className="mt-[20px]">
	//     forgot password
	//   </Link>
	//   <Link href="/history" className= "mt-[20px] text-blue-500">History</Link>
	//   <Link href="/detailHistory" className= "mt-[20px] text-blue-500">Detail History</Link>
	//   <StatusBar style="auto" />
	// </View>
}
