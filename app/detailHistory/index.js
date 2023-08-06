import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DetailHistory() {
    return (
        <View style={
            {
                backgroundColor: "#EEEEEE",
                opacity: 0.8,
                height: '100%', 
            }
        }>
            <Text style={{
                textAlign: 'center',
                paddingVertical: 10,
            }}>
                Mã chuyến đi: A-4GURK78BWWIL4
            </Text>

            {/* report information for user  */}
            <View style={
                {
                    width: "100%",
                    display: 'flex',
                    flexDirection: 'row',
                    paddingVertical: 20,
                    backgroundColor: 'white',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    alignItems: 'center',
                    marginRight: 10, 
                }
            }>
                <Icon name="user" size={33} color="grey"  style= {{
                    borderWidth: 1, 
                    borderRadius: 30, 
                    borderColor: '#61677A',
                    padding: 5, 
                    paddingHorizontal: 10, 
                    backgroundColor: 'white', 
                    textAlign: 'center', 
                }}/>
                <Text style={{
                    marginLeft: 15,
                    fontSize: 15,
                    lineHeight: 20,
                    marginRight: 10, 
                    color: 'grey',
                    lineHeight: 25, 
                }}>
                    Bạn không thể xếp hạng, gửi tiền tip hoặc xem thông tin tài xế sau 72 giờ.
                </Text>
            </View>

            {/* payment information  */}
            <View style={{
                marginTop: 10,
                backgroundColor: 'white',
                paddingVertical: 20,

            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 15,
                }}>
                    <Text style={{
                        fontSize: 23,
                        fontWeight: 700,
                    }}>
                        Tổng đã trả
                    </Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                    }}>
                        <Text style={{
                            fontSize: 23,
                            fontWeight: 700,
                        }}>
                            160.000đ
                        </Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontSize: 13,
                                marginRight: 8,
                            }}>
                                Tiền mặt
                            </Text>
                            <Icon name="money" size={25} color="green" />
                        </View>
                    </View>
                </View>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 15,
                    marginTop: 15,
                }}>
                    <Text style={{
                        fontSize: 17,
                        color: '#068FFF',
                        fontWeight: 700,
                        opacity: 0.8,
                    }}>
                        Xem chi tiết
                    </Text>
                    <Icon name="angle-right" size={24} color="grey" />
                </View>

                <View style={{
                    height: 1,
                    width: '90%',
                    backgroundColor: '#D8D9DA',
                    marginHorizontal: 15,
                    marginTop: 17,

                }} />

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 15,
                    marginTop: 15,
                }}>
                    <View style={
                        {
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }
                    }>
                        <Icon name="user" size={28} color="grey" />
                        <Text style={{
                            fontSize: 16,
                            marginLeft: 13,
                        }}>
                            Cá nhân
                        </Text>
                    </View>
                    <Icon name="angle-right" size={24} color="grey" />

                </View>
            </View>

            {/* transport information  */}
            <View style={{
                paddingVertical: 15,
                backgroundColor: 'white',
                marginTop: 10,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

            }}>

                {/* title  */}
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginHorizontal: 15,
                    justifyContent: 'space-between',

                }}>
                    <Text style={{
                        fontSize: 16,
                    }}>
                        GrabBike
                    </Text>

                    <Text style={{
                        fontWeight: 400,
                    }}>
                        31 km - 57mins
                    </Text>
                </View>

                {/* departure information  */}
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginTop: 20,
                    marginLeft: 15,

                }}>
                    <Icon name="circle" size={20} color="#30A2FF" />

                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: 18,
                    }}>
                        <Text style={{
                            fontSize: 14,
                        }}>
                            Đường Lê Cơ
                        </Text>
                        <Text style={{
                            lineHeight: 30,
                            color: 'grey'
                        }}>
                            1:20 PM
                        </Text>
                    </View>
                </View>

                {/* destination information */}
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginTop: 20,
                    marginLeft: 15,

                }}>
                    <Icon name="map-marker" size={30} color="red" />

                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: 18,
                    }}>
                        <Text style={{
                            fontSize: 14,
                        }}>
                            KTX Khu A ĐHQG TPHCM - Cổng Đón/Trả Khách
                        </Text>
                        <Text style={{
                            lineHeight: 30,
                            color: 'grey'
                        }}>
                            1:20 PM
                        </Text>
                    </View>
                </View>

            </View>

            <View style= {{
                 display: 'flex', 
                 flexDirection: 'row',
                 justifyContent: 'center',   
                 opacity: 0.9, 
            }}>
            <TouchableOpacity style={{
                padding: 10,
                borderRadius: 5,
                marginTop: 30, 
                width: '90%', 
                borderWidth: 1, 
                borderColor: '#272829', 
            }} onPress={() => console.log('Button pressed')}>
                <Text style={{
                    color: '#272829',
                    fontSize: 20,
                    fontWeight: 700, 
                    textAlign: 'center',
                }}>Báo cáo lỗi</Text>
            </TouchableOpacity>

            </View>

        </View>

    )
}