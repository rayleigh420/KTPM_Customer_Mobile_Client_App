import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function InforProfile(props) {
    return (
        <View style= {styles.container}>
            {/* Infor Name  */}
            <View >
                <Text style= {styles.titleInput}>
                    Name
                </Text>
                <TextInput
                    style={styles.inputInfor}
                    placeholder= {props.name}
                    placeholderTextColor="#333333" // change color
                />
            </View>

            {/* Infor PhoneNumber  */}
            <View>
                <Text style= {styles.titleInput}>
                    Password
                </Text>
                <TextInput 
                     secureTextEntry={true}
                    style={styles.inputInfor}
                    placeholder='**************'
                    placeholderTextColor="#333333" // change color
                />
            </View>

            {/* Infor Email Address  */}
            <View>
                <Text style= {styles.titleInput}>
                    Enter your email address
                </Text>
                <TextInput
                    style={styles.inputInfor}
                    placeholder={props.email}
                    placeholderTextColor="#333333" // change color

                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 40, 
        marginTop: 5, 
    }, 
    inputInfor: {
        width: '85%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#c6c6c6',
        marginBottom: 20,
        paddingBottom: 0,  
        fontSize: 18,
        color: 'black', 
    },
    titleInput: {
        fontSize: 16, 
        opacity: 0.9, 
    }, 
    
}); 