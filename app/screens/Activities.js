import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import styles from "../styles/ActivitiesStyle.js";
import GestureRecognizer from 'react-native-swipe-gestures'

const ActivitiesScreen = ({ navigation }) => {
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  }

  return (
    <>
      <GestureRecognizer
        onSwipeLeft={() => navigation.navigate('Articles')}
        onSwipeRight={() => navigation.navigate('Games')}
        config={config}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.container}>
          <Text>ActivitiesScreenX</Text>

          {/*<Button
        title="Single activity" 
        onPress={() => navigation.navigate("SingleActivity")}
        visibility={0}
      />*/}
        </View>
      </GestureRecognizer>
    </>
  )
};

export default ActivitiesScreen;
