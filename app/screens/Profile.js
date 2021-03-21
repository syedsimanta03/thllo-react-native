import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import styles from "../styles/ProfileStyle.js";
import GestureRecognizer from 'react-native-swipe-gestures'

const ProfileScreen = ({ navigation }) => {
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  }

  return (
    <>
      <GestureRecognizer
        onSwipeLeft={() => navigation.navigate('Games')}
        config={config}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.container}>
          <Text>ProfileScreenX</Text>
        </View>
      </GestureRecognizer>
    </>
  )
}

export default ProfileScreen;
