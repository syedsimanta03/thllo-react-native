import React, { useEffect, useState } from 'react'
import GestureRecognizer from 'react-native-swipe-gestures'
import { ScrollView, View, Text, Button, StyleSheet, Image } from 'react-native'
import styles from '../styles/HomeStyle.js'

const HomeScreen = ({ navigation }) => {
  const [titleData, setTitleData] = useState([])
  const [state, setState] = useState('')


  useEffect(() => {
    fetch(
      'https://app.Thallo.care/php/api/simpleselect.php?s=strings^id-title-gr-en^title=|pagetitle|^id-asc^100'
    )
      .then((response) => response.json())
      .then((json) => setTitleData(json.data[0]))
      .catch((error) => console.error(error))
  }, [])

  var titleDatal
  if (global.lang === 'gr') {
    titleDatal = titleData.gr
  } else {
    titleDatal = titleData.en
  }

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  }

  return (
    <>
      <GestureRecognizer
        onSwipeRight={() => navigation.navigate('Articles')}
        config={config}
        style={{
          flex: 1,
        }}
      >
        <ScrollView style={styles.scrollview}>
          <View style={styles.container}>
            {global.lang === 'gr' ? (
              <Text>{titleData.gr}</Text>
            ) : (
              <Text>{titleData.en}</Text>
            )}
            <Image
              source={{
                uri: 'https://app.Thallo.care/images/' + global.imgpart2,
              }}
              style={{ width: 200, height: 200 }}
            />
            <Text>{state}</Text>
          </View>
        </ScrollView>
      </GestureRecognizer>
    </>
  )
}

export default HomeScreen
