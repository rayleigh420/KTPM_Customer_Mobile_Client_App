import { View, Text } from "react-native";
import React from "react";

export default function TodoList({ todo }) {
  return (
    <View className="flex-1 mb-[10px]">
      {todo &&
        todo.map((item, index) => (
          <Text key={index} className="mb-[5px] text-[15px]">
            {item}
          </Text>
        ))}
    </View>
  );
}
