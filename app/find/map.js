import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Stack, usePathname } from 'expo-router'
import { Entypo } from '@expo/vector-icons';
import ViewMap from '../../src/components/Map/ViewMap';
import PickUp from '../../src/components/Location/PickUp';
import Book from '../../src/components/Location/Book';

export default function Map() {
    const [pickBook, setPickBook] = useState(false);

    const pathname = usePathname()

    return (
        <View className="h-full relative">
            <Stack.Screen options={{
                title: "",
                headerShadowVisible: false,
                headerTransparent: true,

                headerLeft: () => {
                    return (
                        <View className="rounded-full min-w-[25px] min-h-[25px] bg-white flex justify-center items-center ml-[5px] shadow-2xl">
                            <Entypo name="chevron-thin-left" size={14} color="black" />
                        </View>
                    )

                }
            }} />
            <ViewMap className="" />
            <Text>{pathname}</Text>
            {
                !pickBook ?
                    <PickUp setPickBook={setPickBook} />
                    :
                    <Book />
            }
        </View>
    )
}