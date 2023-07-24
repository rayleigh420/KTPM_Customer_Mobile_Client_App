import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getData } from "../../src/utils/asyncStorage";

export default function Profile() {
  const [dataUser, setDataUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("user");
      setDataUser(data);
    };
    fetchData();
  }, []);
  return <View>{dataUser && <Text>Hello {dataUser?.userName}</Text>}</View>;
}
