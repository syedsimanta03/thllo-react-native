import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import styles from "../styles/GamesStyle.js";
import GestureRecognizer from 'react-native-swipe-gestures'

const GamesScreen = ({ navigation }) => {
const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  }

  return (
    <>
      <GestureRecognizer
        onSwipeLeft={() => navigation.navigate('Activities')}
        onSwipeRight={() => navigation.navigate('Profile')}
        config={config}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.container}>
          <Text>GamesScreenX</Text>
          {/*<Button title="" onPress={() => navigation.navigate("SingleGame")} />*/}
        </View>
      </GestureRecognizer>
    </>
  )
};

export default GamesScreen;
