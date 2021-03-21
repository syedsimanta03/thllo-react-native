import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../styles/LandingStyle.js';
 
 
const LandingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Public Landing Screen</Text>
      <Button 
        title="Go to Sign In"
        onPress={() => navigation.navigate('Sign In')}
      />
    </View>
  );
};
 
export default LandingScreen;