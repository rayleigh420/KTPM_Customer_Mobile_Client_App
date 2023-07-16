import { View, Text, Image } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import { Icon } from "@rneui/themed";
import { fontSizes, icons } from "../../src/constants";

export default function SignIn() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#14BF61",
      }}
    >
      <View
        style={{
          flex: 60,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={icons.logoGrabWhite}
          style={{
            height: 90,
            width: 140,
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            color: "white",
            fontSize: fontSizes.h3,
            fontWeight: "400",
          }}
        >
          Your everyday everything app
        </Text>
      </View>
      <View
        style={{
          flex: 20,
        }}
      >
        <Button
          buttonStyle={{
            width: "88%",
            height: 56,
            borderRadius: 50,
            alignSelf: "center",
            backgroundColor: "white",
            alignItems: "center",
            paddingHorizontal: 20,
            borderColor: "transparent",
            borderWidth: 0,
          }}
          titleStyle={{
            color: "black",
            fontSize: fontSizes.h3,
            // marginLeft: 50,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          <Icon
            name="facebook"
            color="#1777F2"
            style={{
              paddingRight: 20,
            }}
          />
          Continue With Facebook
        </Button>
        <Button
          buttonStyle={{
            width: "88%",
            height: 56,
            borderRadius: 50,
            alignSelf: "center",
            backgroundColor: "white",
            alignItems: "center",
            paddingHorizontal: 20,
            borderColor: "transparent",
            borderWidth: 0,
            marginTop: 15,
          }}
          titleStyle={{
            color: "black",
            fontSize: fontSizes.h3,
            // marginLeft: 50,
            alignSelf: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="google"
            color="red"
            style={{
              marginRight: 30,
              // paddingLeft: 18,
            }}
            type="font-awesome"
          />
          Continue With Google
        </Button>
      </View>
      <View
        style={{
          flex: 20,
          // backgroundColor: "blue",
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{
              height: 1,
              backgroundColor: "white",
              width: "38%",
              marginHorizontal: 20,
            }}
          />
          <Text
            style={{
              fontSize: fontSizes.h3,
              color: "white",
            }}
          >
            or
          </Text>
          <View
            style={{
              height: 1,
              backgroundColor: "white",
              width: "38%",
              marginHorizontal: 20,
            }}
          />
        </View>
        <Button
          buttonStyle={{
            width: "88%",
            height: 56,
            borderRadius: 50,
            alignSelf: "center",
            backgroundColor: "white",
            alignItems: "center",
            paddingHorizontal: 20,
            borderColor: "transparent",
            borderWidth: 0,
            marginTop: 15,
          }}
          titleStyle={{
            color: "black",
            fontSize: fontSizes.h3,
            // marginLeft: 50,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          <Icon
            name="phone"
            color="black"
            style={{
              paddingRight: 20,
            }}
          />
          Continue With Mobile Number
        </Button>
      </View>
    </View>
  );
}
