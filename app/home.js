import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../src/components/homepage/header';
import SearchBar from '../src/components/homepage/SearchBar';
import History from '../src/components/homepage/History';
import Footer from '../src/components/homepage/Footer';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';


export default function Home() {
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <Header />
      <SearchBar />
      <History />
      <View>
        <Text style={styles.textAddition}>
          More ways to travel
        </Text>
      </View>
      <Footer />

      <View style={{
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        justifyContent: "space-around",
        alignItems: "center",
        bottom: 0,
        right: 0,
        left: 0,
        height: "10%",
        width: "100%", 
        shadowColor: 'black', // Màu sắc của đổ bóng
        shadowOffset: { width: 0, height: -2 }, // Độ lệch theo chiều ngang và dọc (0 là không có lệch theo chiều ngang, -2 là đổ bóng lên phía trên)
        shadowOpacity: 0.3, // Độ trong suốt của đổ bóng (từ 0 đến 1)
        shadowRadius: 2, // Độ rộng của đổ bóng

        // Đặt elevation cho Android (nếu bạn muốn)
        elevation: 2,
        borderRadius: 4,
      }}>

        <View style={styles.item}>
          <Icon name="user" size={28} color="black" />
          <Link href="/profile" style={styles.text} >
            Profile 
          </Link>
        </View>

        <View style={styles.item}>
          <Icon name="search" size={28} color="black" />
          <Link href="/home" style={styles.text} >
            Discover
          </Link>
        </View>

        <View style={styles.item}>
          <Icon name="history" size={28} color="black" />
          <Link href="/history" style={styles.text} >
            History
          </Link>
        </View>





      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  textAddition: {
    fontSize: 20,
    fontWeight: 600,
    opacity: 0.9,
    marginTop: 20,
    marginLeft: 15,
  },
  text: {

    fontSize: 18,
    fontWeight: 500,
  },
  separator: {
    width: 1, // Độ rộng của thanh chắn
    height: '100%', // Chiều cao của thanh chắn theo chiều dọc
    backgroundColor: 'black', // Màu sắc của thanh chắn
  },
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", 
    paddingTop: 10
  }

});

