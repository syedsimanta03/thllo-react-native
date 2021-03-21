import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import styles from "../styles/ArticlesStyle.js";
import GestureRecognizer from 'react-native-swipe-gestures'

const ArticlesScreen = ({navigation}) => {
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  }

  return (
    <>
      <GestureRecognizer
        onSwipeLeft={() => navigation.navigate('Home')}
        onSwipeRight={() => navigation.navigate('Activities')}
        config={config}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.container}>
          <Text>ArticlesScreenX</Text>
          {/*<Button title="Single article" onPress={() => navigation.navigate("SingleArticle")} />*/}
        </View>
      </GestureRecognizer>
    </>
  )
}

export default ArticlesScreen;
