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

function typePin() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Text
        style={{
          alignSelf: "flex-start",
          fontSize: fontSizes.h2,
          fontWeight: 600,
          marginLeft: 30,
          marginTop: 30,
        }}
      >
        Enter your PIN
      </Text>
      <View>
        <TextInput
          textContentType="password"
          keyboardType="number-pad"
          secureTextEntry
          style={{
            height: 50,
            width: "80%",
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.3)",
            marginBottom: 20,
            alignSelf: "center",
            paddingLeft: 10,
            marginTop: 30,
            fontSize: fontSizes.h2,
          }}
        />
      </View>
      <Button
        buttonStyle={{
          marginTop: 20,
          borderRadius: 30,
          height: 55,
          marginHorizontal: 20,
          // width: "maxContent",
        }}
        type="clear"
        titleStyle={{
          fontSize: fontSizes.h3,
        }}
      >
        Forgot PIN?
      </Button>
    </View>
  );
}

export default typePin;
