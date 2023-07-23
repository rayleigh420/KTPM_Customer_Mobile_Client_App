import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { Button } from "@rneui/base";
import { Icon } from "@rneui/themed";
import { fontSizes, images } from "../../src/constants";
import { validateEmail } from "../../src/utils/validates";
import { Stack, router } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../src/api/testAPI";
import axios from "../../src/utils/axios";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const [showError, setShowError] = useState(false);

  const signUpMutation = useMutation({
    mutationFn: ({ email, role }) => signUp({ email, role }),
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (err) => {
      console.log(err)
    }
  });

  const handleSubmitEmail = () => {
    signUpMutation.mutate({
      email: email,
      role: "customer"
    })
  };
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            height: 56,
          },
          headerShadowVisible: false,
          headerRight: () => {
            return (
              <View
                style={{
                  // height: 56,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: 295,
                }}
              >
                <Text
                  style={{
                    fontSize: fontSizes.h3,
                    fontWeight: 700,
                    marginRight: 20,
                  }}
                >
                  Get Started
                </Text>
              </View>
            );
          },
        }}
      />
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
          Email
        </Text>
        <View
          style={{
            // flexDirection: "row",
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          {/* <Button
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
          </Button> */}
          <TextInput
            placeholder="grab@gmail.com"
            placeholderTextColor={"gray"}
            style={{
              fontSize: fontSizes.h3,
              borderBottomWidth: 1,
              borderBottomColor: showError ? "red" : "gray",
            }}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setShowError(false);
            }}
          />
          {showError && (
            <Text style={{ marginTop: 10, color: "red" }}>{errorEmail}</Text>
          )}
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
          onPress={handleSubmitEmail}
        />
      </View>
    </View>
  );
}
