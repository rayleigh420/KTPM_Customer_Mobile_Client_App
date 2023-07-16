import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { Button, fonts } from "@rneui/base";
import { Icon } from "@rneui/themed";
import { fontSizes, icons } from "../../src/constants";

function getCode() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
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
      </View>
      <View
        style={{
          height: 100,
          //   flex: 10,
          marginLeft: 20,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            fontSize: fontSizes.h4,
          }}
        >
          Enter the 6-digit code sent to
        </Text>
        <Text
          style={{
            fontSize: fontSizes.h4,
            fontWeight: "600",
          }}
        >
          +84 0773255264
        </Text>
      </View>
      <View
        style={{
          flex: 75,
          justifyContent: "space-evenly",
        }}
      >
        <TextInput
          keyboardType="number-pad"
          placeholder="000000"
          placeholderTextColor={"rgba(0,0,0,0.2)"}
          style={{
            fontSize: fontSizes.h1Large,
            flex: 1,
            marginRight: 20,
            position: "absolute",
            top: 0,
            left: 0,
            marginLeft: 20,
          }}
          // value={email}
          onChangeText={(text) => {
            // setEmail(text);
            // setErrorEmail("");
          }}
        />
      </View>
      <View
        style={{
          height: 75,
          //   backgroundColor: "blue",
          marginLeft: 20,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: fontSizes.h4,
          }}
        >
          Didn't get a code?
        </Text>
        {/* <Button
          buttonStyle={{
            backgroundColor: "white",
            alignSelf: "flex-start",
            marginLeft: -10,
            // marginBottom: 10,
          }}
          titleStyle={{
            color: "#14BF61",
            textDecorationLine: "underline",
          }}
        >
          Request new code
        </Button> */}
        <Text
          style={{
            fontSize: fontSizes.h4,
            marginTop: 10,
            fontWeight: 700,
            color: "rgba(0,0,0,0.2)",
          }}
        >
          Request a new code in 00:27
        </Text>
      </View>
    </View>
  );
}

export default getCode;
