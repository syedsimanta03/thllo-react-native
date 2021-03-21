import React, { useEffect, useState } from "react";
import { View, Image, Text, Button } from "react-native";
import styles from "../styles/LoadingStyle.js";

const logo = require("../assets/logo-transparent.png");
const loader = require("../assets/loader.gif");

const LoadingScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count == 3) {
      navigation.navigate("Thallo");
    }
  });
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Image style={styles.loader} source={loader} />
      <Text>You clicked {count} times.</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title="Click me"
        color="red"
        accessibilityLabel="Click this button to increase count"
      />
    </View>
  );
};

export default LoadingScreen;
