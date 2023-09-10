import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import NavigationHistory from "../../src/components/history/NavigationHistory";
import CardItemHistory from "../../src/components/history/CardItemHistory";
import { useRouter } from "expo-router";
import { Stack } from 'expo-router';





export default function History() {
    const navigation = useRouter();

    const data = [
        {
            address: "Chuyến đi đến KTX Khu A DGQG TPHCM - Cổng Đón/...",
            time: "08/09/2023 - 19:20",
            price: "160.000đ"
        },
        {
            address: "227 Nguyễn Văn Cừ, Phường 04, quận 05, TP Hồ Chí Minh",
            time: "04/09/2023 - 12:10",
            price: "45.000đ"
        },
        {
            address: "263 Ngô Quyền, phường 05, quận 10 - Hẻm 115/234",
            time: "02/09/2023 - 07:20",
            price: "20.000đ"
        },
        {
            address: "Chợ Vũng Liêm, Khóm 03, Thị Trấn Vũng Liêm, Vĩnh Long",
            time: "01/09/2023 - 23:48",
            price: "57.000đ"
        },
        {
            address: "139 Đ. Đề Thám, Phường Cô Giang, Quận 1, TP Hồ Chí Minh",
            time: "01/09/2023 - 12:52",
            price: "93.450đ"
        },
        {
            address: "2 Đ. Nguyễn Thông, Phường 6, Quận 3, TP Hồ Chí Minh",
            time: "29/08/2023 - 14:02",
            price: "42.000đ"
        },
        {
            address: "215 Đ. Điện Biên Phủ, Phường 15, Bình Thạnh, TP Hồ Chí Minh",
            time: "28/08/2023 - 13:22",
            price: "98.452đ"
        },
        {
            address: "9 Đường HT 31, Hiệp Thành, Quận 12, TP Hồ Chí Minh, Việt Nam",
            time: "28/08/2023 - 08:17",
            price: "142.000đ"
        },
        {
            address: "737 Đ. Cách Mạng Tháng 8, Phường 6, Tân Bình, TP Hồ Chí Minh",
            time: "25/08/2023 - 06:48",
            price: "12.000đ"
        },
        {
            address: "273/1A Đ. Tô Hiến Thành, Phường 12, Quận 10, TP Hồ Chí Minh",
            time: "22/08/2023 - 18:19",
            price: "72.000đ"
        },
        {
            address: "30 Phan Thúc Duyện, Phường 4, Tân Bình, TP Hồ Chí Minh",
            time: "21/08/2023 - 09:51",
            price: "58.480đ"
        },
        ,
        {
            address: "9 Đường HT 31, Hiệp Thành, Quận 12, TP Hồ Chí Minh, Việt Nam",
            time: "28/08/2023 - 08:17",
            price: "142.000đ"
        },
        {
            address: "737 Đ. Cách Mạng Tháng 8, Phường 6, Tân Bình, TP Hồ Chí Minh",
            time: "25/08/2023 - 06:48",
            price: "12.000đ"
        },
        {
            address: "273/1A Đ. Tô Hiến Thành, Phường 12, Quận 10, TP Hồ Chí Minh",
            time: "22/08/2023 - 18:19",
            price: "72.000đ"
        },
        {
            address: "30 Phan Thúc Duyện, Phường 4, Tân Bình, TP Hồ Chí Minh",
            time: "21/08/2023 - 09:51",
            price: "58.480đ"
        },
    ]

    return (

        <View style={{
            marginBottom: 30,
            marginTop: 70,
            height: "100%", 
            width: "100%"
        }}>
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    title: ''
                }}
            />
            {/* header  */}
            <NavigationHistory />

            {/* content  */}
            <FlatList
                style={
                    {
                        marginTop: 10,
                        flex: 1, 
                    }
                }
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.push({
                                pathname: "/detailHistory",
                            });
                        }}
                    >
                        <CardItemHistory
                            address={item.address}
                            time={item.time}
                            price={item.price}
                        />
                    </TouchableOpacity>
                )}
            />
           
        </View>

    )
}