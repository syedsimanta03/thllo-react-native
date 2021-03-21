import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../styles/SignUpStyle.js';
 
const SignUpScreen = ({ onSignUp }) => {
  return (
    <View style={styles.container}>
      <Text>Public Sign Up Screen</Text>
      <Button title="Sign Up" onPress={onSignUp} />
    </View>
  );
};
 
export default SignUpScreen;