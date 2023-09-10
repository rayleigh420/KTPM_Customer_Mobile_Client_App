import { View, Text, StyleSheet, Image, TextInput, LogBox } from "react-native"
import React, { useEffect, useState, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import { useQuery } from "@tanstack/react-query";
import { useNavigation, useRouter } from "expo-router";
import { EXPO_PUBLIC_MAP_APIKEY } from "@env";
import Icon from 'react-native-vector-icons/FontAwesome';
import { io } from "socket.io-client";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { useSocket } from "../../src/utils/SocketContext";

// import { useSocket } from "../../src/utils/socketContext";


export default function progressRide() {
  const { socketRef, connectSocket, disconnectSocket } = useSocket();

    const initialRegion = {
        latitude: 10.804384029092866,
        longitude: 106.66000681737485,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const markerCoordinates = {
        latitude: 10.804384029092866,
        longitude: 106.66000681737485
    };

    const [postion, setPosition] = useState({});
    const [status, setStatus] = useState(false);
    const [locationDriver, setLocationDriver] = useState({
        latitude: 10.762742867982292,
        longitude: 106.68230474400272,
    })


    const data = {
        "pickup": {
            "lat": "10.8593823",
            "lon": "106.745501"
        },
        "destination": {
            "lat": "10.852",
            "lon": "106.756"
        },
        "price": "10000",
        "vehicleType": "motorbike",
        "paymentMethod": "cash"
    }   

    const sendData = () => {
        if (status === false) {
            connectSocket();
            socketRef.current.on('connect', () => {
                console.log('connected');
            });
            socketRef.current.emit("createBooking", data);
        }
    }

    const updateLocation = () => {
        socketRef.current.on("updateLocationDriver", (data) => {
            console.log("Data updateLocationDriver: ", data.currentLocation.lat, " - ", data.currentLocation.lon);

            // Tạo một bản sao mới của locationDriver
            const newLocationDriver = { ...locationDriver };

            // Cập nhật latitude và longitude của bản sao mới
            newLocationDriver.latitude = data.currentLocation.lat;
            newLocationDriver.longitude = data.currentLocation.lon;

            // Cập nhật locationDriver bằng bản sao mới
            setLocationDriver(
                {
                    latitude: +data.currentLocation.lat,
                    longitude: +data.currentLocation.lon
                }
            );
        });

    }

    // console.log("Location Driver: ", locationDriver);




    useEffect(() => {
        // console.log(socketRef.current);
        // Sử dụng setTimeout để gọi hàm myFunction sau 15 giây
        // const intervalId = setInterval(updateLocation, 15000);
        updateLocation(); 

        // Đảm bảo bạn xóa interval khi component unmount để tránh lỗi
        // return () => clearInterval(intervalId);
    }, []);


    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={initialRegion}>
                <MapViewDirections
                    origin={markerCoordinates}
                    destination={locationDriver}
                    apikey={EXPO_PUBLIC_MAP_APIKEY}
                    strokeWidth={7}
                    strokeColor="#00B0FF"
                />
                <Marker coordinate={markerCoordinates} title="Marker Title" description="Marker Description" />
                <Marker coordinate={locationDriver} title="Destination Location"
                >
                    <Icon name="motorcycle" size={30} color="blue" />
                </Marker>

            </MapView>

            {/* UI navigation  */}
            <View style={{
                height: 250,
                width: "92%",
                borderRadius: 10,
                backgroundColor: "#FFF4F4",
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -4 }, // Đặt giá trị âm cho height để thêm đổ bóng phía trên
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5, // Thêm đổ bóng cho Android
            }}>
                <View style={{
                    backgroundColor: "#F4EEEE",
                    padding: 15,
                }}>
                    <Text style={{
                        fontWeight: 600,
                        fontSize: 18,
                    }}>
                        Tài xế sắp đến
                    </Text>
                    <Text style={{
                        fontSize: 14,
                    }}>
                        227 Nguyễn Văn Cừ
                    </Text>
                </View>


                {/* infor driver  */}
                <View
                    style={{
                        padding: 15,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",

                    }}
                >
                    <View>
                        <View style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}>
                            <Image source={{ uri: "https://images2.thanhnien.vn/thumb_w/686/528068263637045248/2023/6/12/anh-chup-man-hinh-2023-06-12-luc-091711-16865364556831284550770-0-468-1126-1312-crop-1686536532374498578919.png" }} style={styles.image} />

                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: 6,
                            }}>
                                <Text>
                                    Phan Thanh Hải - 4.7
                                </Text>
                                <Icon name="star" size={20} color={"#FFA41B"} />
                            </View>
                        </View>
                    </View>

                    <View style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end"
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 600,
                        }}>
                            64D1 - 00532
                        </Text>
                        <Text>
                            Honda AirBlade
                        </Text>
                    </View>
                </View>


                <View style={styles.container2}>
                    <View style={styles.inputContainer}>
                        <View style={styles.iconContainer}>
                            <Icon name="comment" size={24} color="#999" />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Chat với tài xế"
                        />
                    </View>
                    <View style={styles.callIconContainer}>
                        <Icon name="phone" size={24} color="#555" />
                    </View>
                </View>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        width: "100%",
        height: 480,
    },
    image: {
        width: 40, // Độ rộng của ảnh
        height: 40, // Chiều cao của ảnh
        borderRadius: 30,
        resizeMode: 'cover', // Chế độ hiển thị của ảnh
    },
    container2: {
        width: "90%",
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignContent: "center",
        marginLeft: 15,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: "#F4EEEE",
        borderRadius: 7,
        padding: 8,
    },
    iconContainer: {
        paddingHorizontal: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    callIconContainer: {
        marginLeft: 8,
        padding: 10,
        paddingHorizontal: 11,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 7,
    },
});