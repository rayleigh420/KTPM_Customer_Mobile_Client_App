import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo, Feather, FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function Map() {
    return (
        <View className="h-full relative bg-white">
            <Stack.Screen options={{
                title: "",
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: 'transparent',
                },

                headerTransparent: "true",
                headerLeft: () => {
                    return (
                        <View className="rounded-full min-w-[25px] min-h-[25px] bg-red-500 flex justify-center items-center ml-[15px]">
                            <Entypo name="chevron-thin-left" size={14} color="black" />
                        </View>
                    )

                }
            }} />
            <View className="absolute bottom-0 w-full px-[15px] flex flex-col justify-center items-center">
                <View className="bg-[#F2F2F2] flex flex-row justify-between items-center px-[17px] py-[15px] min-w-[350px] rounded-[5px]">
                    <View className="flex flex-col justify-start items-center">
                        <View className="w-[25px] p-[3px] mt-[7px] rounded-full flex justify-center items-center">
                            <FontAwesome name="circle-o" size={20} color="#126FD7" />
                        </View>
                    </View>
                    <View className="flex flex-row justify-between border-[#EFEFEF] border-b-[1.5px]">
                        <View className="flex flex-col justify-center w-[240px] max-w-[262px]">
                            <Text className='text-[16px] font-bold'>Huỳnh Sơn</Text>
                            <Text className='text-[13px]'>5.34km . Pick up/Drop off Gate, 227 Nguyễn</Text>
                        </View>
                        <View className='w-[19px] flex flex-col justify-center items-center pt-[10px] ml-[20px]'>
                            <Ionicons name="bookmark-outline" size={17} color="black" />
                        </View>
                    </View>
                </View>
                <View className="flex flex-row items-center justify-start min-w-[350px] pl-[15px] py-[20px] border-[#EFEFEF] border-b-[1.5px] mb-[20px]">
                    <Entypo name="edit" size={24} color="#01B0E7" />
                    <Text className="text-[#01B0E7]">Add pick-up notes for driver</Text>
                </View>
            </View>
        </View>
    )
}