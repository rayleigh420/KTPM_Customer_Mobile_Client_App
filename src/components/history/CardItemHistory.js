import react from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CardItemHistory() {
    return (
        <View style={styles.container}>
            <Icon name="motorcycle" size={28} color="green" style= {{marginRight: 15, opacity: 0.85, marginTop: 10,  }}/>
            <View styles={styles.content}>
     
                <Text style= {{fontSize: 16, opacity: 0.8}}>
                    Chuyến đi đến KTX Khu A ĐHQG TPHCM  - Cổng Đón/...
                </Text>
                <Text style= {{   fontSize: 14, color: 'grey'}}>
                    30 Th1 2023, 13:20
                </Text>
            </View>

            <Text style={{marginLeft: 25, fontSize: 16}}>
                160.000đ
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '60%',
        paddingLeft: 15,
        paddingRight: 15,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15, 

    },
    content: {
        display: 'flex', 
        flexDirection: 'column', 
        marginRight: 30, 
    }, 
   
})