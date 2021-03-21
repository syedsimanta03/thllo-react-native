import { StyleSheet, Dimensions } from 'react-native';
import colors from './colors.js';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default StyleSheet.create({

	// BODY
	
  body: {
  backgroundColor:colors.green,
  display:'flex',
	flex:1,
	alignContent:'center',
	justifyContent:'center',
  }

});