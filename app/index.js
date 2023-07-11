import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-400">Router</Text>
      <Link href="/home" className="mt-[20px]">Home</Link>
      <Link href="/todo" className="mt-[20px]">Todo App</Link>
      <Link href="/testAPI" className="mt-[20px]">Test React Query</Link>
      <Link href="/signUp" className="mt-[20px]">SignUp</Link>
      <Link href="/signIn" className="mt-[20px]">SignIn</Link>
      <StatusBar style="auto" />
    </View>
  );
}