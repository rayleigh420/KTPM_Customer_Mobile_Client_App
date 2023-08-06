import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HeaderProfile() {
  return (
    <View>
      <View>
        <Image
          source={{ uri: 'https://o.rada.vn/data/image/2020/01/09/Them-dia-diem-grab-banner-1.jpg' }}
          style={styles.backgroundImage}
        />
        <Image 
          source={{uri: 'https://dapanchuan.com/wp-content/uploads/2023/02/nobita-hoc-lop-may.jpg'}}
          style={styles.avtProfile}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    height: 100,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  avtProfile: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'absolute',
    height: 70,
    width: 70, 
    top: 68,
    left: '40%',
    right: '50%',
    borderRadius: 100, 
  },
}); 