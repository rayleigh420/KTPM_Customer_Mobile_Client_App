import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo, Feather, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';

export default function SavedPlaces({ place }) {
    console.log(place)
    const router = useRouter();

    const handleNavigate = () => {
        console.log("firsHelloit")
        if (place !== '') {
            router.push(`find/map?place=${place}`)
        }
    }

    return (
        <View className='bg-white px-[20px] mt-[11px]'>
            <View className="flex flex-row justify-between pt-[37px] pb-[20px]">
                <Text className="text-[16px] font-bold">Saved Places</Text>
                <Text className="text-[15px] font-bold text-[#166ECF]">View All</Text>
            </View>
            <View className="flex flex-col">
                {/* <Link href={`find/map?place=${place}`} className="mb-[20px]"> */}
                <TouchableOpacity onPress={() => handleNavigate()}
                >
                    <View className="flex flex-row mb-[20px]">
                        <View className="flex flex-col justify-start items-center">
                            <View className="w-[25px] p-[3px] mt-[7px] rounded-full bg-[#00B14F] flex justify-center items-center">
                                <Ionicons name="bookmark-sharp" size={17} color="white" />
                            </View>
                        </View>
                        <View className="flex flex-row justify-between border-[#EFEFEF] border-b-[1.5px] ml-[10px] pb-[20px]">
                            <View className="flex flex-col justify-center w-[262px] max-w-[262px]">
                                <Text className='text-[16px] font-bold'>Huỳnh Sơn</Text>
                                <Text className='text-[13px]'>5.34km . Pick up/Drop off Gate, 227 Nguyễn</Text>
                                <View className="bg-[#D9FCDE] p-[2px] pt-[0.5px] mt-[5px] w-[90px] rounded-[7px] font-[600] flex flex-row justify-center">
                                    <Text className="text-[13.5px]">Recent Used</Text>
                                </View>
                            </View>
                            <View className='w-[19px] flex flex-col justify-start items-center pt-[10px] ml-[30px]'>
                                <Feather name="edit" size={17} color="black" />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <View className="flex flex-row mb-[20px]">
                    <View className="flex flex-col justify-start items-center">
                        <View className="w-[25px] p-[3px] rounded-full bg-[#00B14F] flex justify-center items-center">
                            <Entypo name="home" size={18} color="white" />
                        </View>
                    </View>
                    <View className="flex flex-row justify-between border-[#EFEFEF] border-b-[1.5px] ml-[10px] pb-[20px]">
                        <View className="flex flex-col justify-center w-[262px] max-w-[262px]">
                            <Text className='text-[16px] font-bold'>Add Home</Text>
                        </View>

                        {/* Create Border bottom */}
                        <View className='w-[19px] flex flex-col justify-start items-center pt-[10px] ml-[30px]'>
                            {/* <Feather name="edit" size={17} color="black" /> */}
                        </View>
                    </View>
                </View>

                <View className="flex flex-row mb-[20px]">
                    <View className="flex flex-col justify-start items-center">
                        <View className="w-[25px] p-[3px] rounded-full bg-[#00B14F] flex justify-center items-center">
                            <Entypo name="suitcase" size={17} color="white" />
                        </View>
                    </View>
                    <View className="flex flex-row justify-between border-[#EFEFEF] border-b-[1.5px] ml-[10px] pb-[20px]">
                        <View className="flex flex-col justify-center w-[262px] max-w-[262px]">
                            <Text className='text-[16px] font-bold'>Add Work</Text>
                        </View>
                        {/* Create Border bottom */}
                        <View className='w-[19px] flex flex-col justify-start items-center pt-[10px] ml-[30px]'>
                            {/* <Feather name="edit" size={17} color="black" /> */}
                        </View>
                    </View>
                </View>

                <View className="flex flex-row mb-[20px]">
                    <View className="flex flex-col justify-start items-center">
                        <View className="w-[25px] p-[3px] mt-[7px] rounded-full bg-[#00B14F] flex justify-center items-center">
                            <Ionicons name="add" size={16} color="white" />
                        </View>
                    </View>
                    <View className="flex flex-row justify-between border-[#EFEFEF] border-b-[1.5px] ml-[10px] pb-[20px]">
                        <View className="flex flex-col justify-center w-[262px] max-w-[262px]">
                            <Text className='text-[16px] font-bold'>Add new</Text>
                            <Text className='text-[13px]'>Save your favourite places</Text>
                        </View>
                        {/* Create Border bottom */}
                        <View className='w-[19px] flex flex-col justify-start items-center pt-[10px] ml-[30px]'>
                            {/* <Feather name="edit" size={17} color="black" /> */}
                        </View>
                    </View>
                </View>
            </View>
        </View >
    )
}