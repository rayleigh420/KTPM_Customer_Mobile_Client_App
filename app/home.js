import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../src/components/homepage/header';
import SearchBar from '../src/components/homepage/SearchBar';
import History from '../src/components/homepage/History';
import Footer from '../src/components/homepage/Footer';

export default function Home() {
  return (
    <View>
      <Header />
      <SearchBar />
      <History />
      <View>
        <Text style={styles.textAddition}>
          More ways to travel
        </Text>
      </View>
      <Footer />
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
    opacity: 0.7,
    marginTop: 20,
  },

});

