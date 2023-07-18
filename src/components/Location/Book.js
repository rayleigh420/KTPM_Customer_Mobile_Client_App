import { View, Text } from 'react-native'
import React from 'react'
import { Entypo, Feather, FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function Book() {
    return (
        <View className="flex flex-col bg-white py-[20px] rounded-t-[15px]">
            <View className="flex flex-row justify-between items-center min-w-[350px] px-[25px] py-[20px] bg-[#EEFAFA]">
                <View className="flex flex-row items-center">
                    <FontAwesome5 name="motorcycle" size={27} color="#00B14F" />
                    <Text className='ml-[20px] font-bold text-[17px]'>
                        GrabBike
                    </Text>
                </View>
                <View>
                    <Text className="font-bold text-[17px]">43.000đ</Text>
                </View>
            </View>
            <View className="flex flex-row justify-between items-center min-w-[350px] px-[25px] py-[20px] ">
                <View className="flex flex-row items-center">
                    <FontAwesome name="car" size={27} color="#00B14F" />
                    <Text className='ml-[20px] font-bold text-[17px]'>
                        GrabCar
                    </Text>
                </View>
                <View>
                    <Text className="font-bold text-[17px]">43.000đ</Text>
                </View>
            </View>
            <View className='flex flex-row justify-center items-center gap-[10px] mt-[10px]'>
                <View className="bg-[#EEFAFA] px-[30px] py-[20px] rounded-[50px] min-w-[165px] justify-center items-center">
                    <Text className="text-[17px] font-bold">GrabNow</Text>
                </View>
                <View className="bg-[#00B14F] px-[30px] py-[20px] rounded-[50px] min-w-[165px] justify-center items-center">
                    <Text className="text-[17px] font-bold text-white">Book</Text>
                </View>
            </View>
        </View>
    )
}