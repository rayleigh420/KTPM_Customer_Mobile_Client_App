import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import { Icon } from "@rneui/themed";
import { fontSizes, images } from "../../src/constants";

export default function SignUp() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View
        style={{
          height: 56,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          buttonStyle={{
            alignSelf: "center",
            backgroundColor: "white",
            alignItems: "center",
            paddingHorizontal: 20,
            borderColor: "transparent",
            borderWidth: 0,
            width: 70,
            paddingLeft: -10,
          }}
        >
          <Icon name="chevron-left" size={40} color={"gray"} />
        </Button>
        <Text
          style={{
            alignSelf: "center",
            fontSize: fontSizes.h3,
            fontWeight: 700,
          }}
        >
          Get Started
        </Text>
        <View
          style={{
            width: 70,
          }}
        />
      </View>
      <View
        style={{
          height: 100,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            fontSize: fontSizes.h4,
            marginLeft: 20,
          }}
        >
          Mobile
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Button
            buttonStyle={{
              height: 50,
              width: 100,
              flexDirection: "row",
              marginLeft: 20,
              marginRight: 20,
              paddingLeft: -10,
              backgroundColor: "white",
              borderBottomColor: "gray",
              borderBottomWidth: 1,
            }}
            titleStyle={{
              color: "black",
              fontWeight: 300,
            }}
          >
            <Image
              source={images.flagVietNam}
              resizeMode="contain"
              style={{
                height: 20,
                width: 60,
              }}
            />
            +84
          </Button>
          <TextInput
            keyboardType="number-pad"
            placeholder="99 123 4567"
            placeholderTextColor={"gray"}
            style={{
              fontSize: fontSizes.h3,
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              flex: 1,
              marginRight: 20,
            }}
            // value={email}
            onChangeText={(text) => {
              // setEmail(text);
              // setErrorEmail("");
            }}
          />
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          marginBottom: 35,
        }}
      >
        <Button
          title={"Next"}
          buttonStyle={{
            borderRadius: 30,
            height: 55,
            marginHorizontal: 20,
            backgroundColor: "#14BF61",
          }}
          titleStyle={{
            fontSize: fontSizes.h2,
          }}
        />
      </View>
    </View>
  );
}
