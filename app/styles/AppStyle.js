import { StyleSheet, Dimensions } from 'react-native'
import colors from './colors.js'

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)

export default StyleSheet.create({
  navigator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.green,
  },
  container: {
    backgroundColor: colors.green,
  },
  tabnavigator: {
    backgroundColor: colors.green,
  },
})
