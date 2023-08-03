import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderProfile from '../../src/components/profile/HeaderProfile';
import { TextInput } from 'react-native-gesture-handler';
import InforProfile from '../../src/components/profile/InforProfile';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { getData } from "../../src/utils/asyncStorage";


export default function Profile() {
  const [isEnabled, setIsEnabled] = useState(true);
  
  const [dataUser, setDataUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("user");
      setDataUser(data);
    };
    fetchData();
  }, []);


  
  const toogleSwith = () => {
    setIsEnabled(previousState => !previousState);
  }
  return (
    <View>
      <Stack.Screen 
        options={{
          headerTransparent: true, 
          title: ''
        }}
      />
      <ScrollView style={styles.container}>
        <HeaderProfile />

        <TouchableOpacity style={styles.inforSummary}>
          <Text style={styles.textSummary}>
            24 Point | Sliver Member
          </Text>

          <Icon name="angle-right" size={19} color="black" style={styles.iconSummary} />
        </TouchableOpacity>

        <View style={styles.checkInfor}>
          <Icon name='check-circle' size={23} color="#35ccf2" />
          <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: 300, color: 'black', opacity: 0.7 }}>GrabLorPIN Enabled</Text>
        </View>

        <InforProfile />

        <Text style={styles.introVerified}>
          Account-related information and product communications from Grab-Lor will be sent to this verified email address.
        </Text>

        <View style={styles.profiles}>
          <Text style={styles.titleProfiles}>
            Profiles
          </Text>
          <TouchableOpacity style={styles.cardProfiles}>
            <Text style={{ color: '#36b8d8', fontSize: 16, fontWeight: 500, }}>
              Add a business profile
            </Text>
            <Text style={{ fontWeight: 300, color: '#a5a4a4' }}>
              Better manage your ride expenses
            </Text>
          </TouchableOpacity>
        </View>


        <View styles={styles.linkAccounts}>
          <Text style={styles.titleLinkAccounts}>
            Linked Accounts
          </Text>

          <View style={styles.containerAccounts}>
            <TouchableOpacity style={styles.cardLinkAccounts}>
              <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <Icon name='facebook' size={30} color={'#3b5998'} />
                <Text style={{ fontSize: 16, fontWeight: 400, marginLeft: 23, opacity: 0.9 }}>
                  Facebook
                </Text>
              </View>

              <Switch
                trackColor={{ false: '#c1b8b8', true: 'green' }}
                thumbColor={isEnabled ? '#f4f3f4' : 'f4f3f4'}
                onValueChange={toogleSwith}
                value={isEnabled}
                style={
                  {
                    marginRight: 10,
                  }
                }
              />
              <StatusBar style='auto' />



            </TouchableOpacity>

            <View style={styles.hrLine}>
            </View>

            <TouchableOpacity style={styles.cardLinkAccounts}>
              <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <Icon name='google' size={30} color={'#eaea7e'} />
                <Text style={{ fontSize: 16, fontWeight: 400, marginLeft: 15, opacity: 0.9 }}>
                  Google
                </Text>
              </View>

              <Switch
                trackColor={{ false: '#c1b8b8', true: 'green' }}
                thumbColor={isEnabled ? '#f4f3f4' : 'f4f3f4'}
                onValueChange={toogleSwith}
                value={isEnabled}
                style={
                  {
                    marginRight: 10,
                  }
                }
              />
              <StatusBar style='auto' />



            </TouchableOpacity>

          </View>

          <View style={
            {
              height: 110,
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }
          }>
            <TouchableOpacity style={{
              marginTop: 20,
              marginBottom: 30

            }}>
              <Text style={
                {
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#6b6767'
                }
              }>
                Log Out
              </Text>
            </TouchableOpacity>

            <Text style={{
              opacity: 0.7
            }}>
              v1.0001(5260000) Build; Build 234123
            </Text>
          </View>

        </View>


      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
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
  inputInfor: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  inforSummary: {
    marginTop: 150,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textSummary: {
    marginRight: 5,
  },
  checkInfor: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
    alignItems: 'center',
  },
  introVerified: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 13,
    fontWeight: 300,
  },
  profiles: {
    marginTop: 20,
  },
  titleProfiles: {
    fontSize: 20,
    fontWeight: 500,
    opacity: 0.6,
    marginLeft: 15,
    marginBottom: 7,
  },
  cardProfiles: {
    height: 70,
    backgroundColor: "white",
    padding: 10,
    paddingTop: 15,
    marginBottom: 10,
  },
  linkAccounts: {
    marginTop: 20,
    marginBottom: 10,
  },
  titleLinkAccounts: {
    fontSize: 20,
    fontWeight: 500,
    opacity: 0.6,
    marginLeft: 10,
    marginBottom: 7,
    marginTop: 10,
  },
  cardLinkAccounts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerAccounts: {
    backgroundColor: 'white',
    padding: 10,
  },
  hrLine: {
    borderTopWidth: 1,
    borderTopColor: 'black',
    marginVertical: 10,
    marginLeft: 2,
    marginRight: 10,
    opacity: 0.1,
  },


}); 


