import { Alert, Button, FlatList, Keyboard, StyleSheet, Text, TextInput, Touchable, View } from 'react-native';
import React from "react";

export default function TodoInput({ text, handleAddTodo, setText }) {
  return (
    <View className="flex flex-row">
      <TextInput
        value={text}
        className="flex-1 border-[1px] mr-[10px] py-3 px-4 block border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        onChangeText={(e) => setText(e)}
      />
      <Button
        onPress={handleAddTodo}
        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        title="Add"
      />
    </View>
  );
}
