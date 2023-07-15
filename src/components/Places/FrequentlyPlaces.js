import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo, Feather, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function FrequentlyPlaces() {
    return (
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
    )
}