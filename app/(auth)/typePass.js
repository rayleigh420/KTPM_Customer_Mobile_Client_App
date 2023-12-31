import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { Button, fonts } from "@rneui/base";
import { Icon } from "@rneui/themed";
import { fontSizes, icons } from "../../src/constants";
import { Stack, useRouter } from "expo-router";
import { getData, storeData } from "../../src/utils/asyncStorage";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../src/api/testAPI";

function getCode() {
  const navigation = useRouter();
  const codeValue = "12345678";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signInMutation = useMutation({
    mutationFn: ({ email, password }) => signIn({ email, password }),
    onSuccess: (data) => {
      storeData(data.data, "user");
      navigation.push("/");
    },
    onError: (err) => {
      setError("Incorrect password");
      setPassword("");
    },
  });

  const handleChangePassword = (text) => {
    setPassword(text);
    setError("");
  };
  useEffect(() => {
    if (password.length === 8) {
      signInMutation.mutate({
        email: email,
        password: password,
      });
    }
  }, [password]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("emailSignUp");
      console.log(data);
      setEmail(data);
    };
    fetchData();
  }, [email]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            height: 56,
          },
          headerShadowVisible: false,
        }}
      />
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
          Enter the password sent to
        </Text>
        <Text
          style={{
            fontSize: fontSizes.h4,
            fontWeight: "600",
          }}
        >
          {email}
        </Text>
      </View>
      <View
        style={{
          flex: 75,
          // justifyContent: "space-evenly",
        }}
      >
        <TextInput
          placeholder="abcXyZ12"
          placeholderTextColor={"rgba(0,0,0,0.2)"}
          maxLength={8}
          style={{
            fontSize: fontSizes.h1Large,
            flex: 1,
            marginRight: 20,
            position: "absolute",
            top: 0,
            left: 0,
            marginLeft: 20,
          }}
          value={password}
          onChangeText={handleChangePassword}
        />
        {error ? (
          <Text
            style={{
              fontSize: fontSizes.h4,
              color: "red",
              fontWeight: 300,
              marginLeft: 20,
              position: "absolute",
              top: 50,
              left: 0,
            }}
          >
            {error}
          </Text>
        ) : (
          <></>
        )}
      </View>
      <View
        style={{
          height: 75,
          marginLeft: 20,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: fontSizes.h4,
          }}
        >
          Already have an account?
        </Text>
        <Button
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
          onPress={() => {
            navigation.push("/signIn");
          }}
        >
          Sign In
        </Button>
      </View>
    </View>
  );
}

export default getCode;
