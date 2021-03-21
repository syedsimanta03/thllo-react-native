import React, { useEffect, useState } from 'react'
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  NativeModules,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import styles from './app/styles/AppStyle.js'
import HomeScreen from './app/screens/Home'
import ArticlesScreen from './app/screens/Articles'
import ActivitiesScreen from './app/screens/Activities'
import GamesScreen from './app/screens/Games'
import ProfileScreen from './app/screens/Profile'
import SingleActivityScreen from './app/screens/SingleActivity'
import SingleArticleScreen from './app/screens/SingleArticle'
import SingleGameScreen from './app/screens/SingleGame'
import colors from './app/styles/colors.js'
import AppLoading from 'expo-app-loading'
import { Asset } from 'expo-asset'
import './global.js'


const RootStack = createStackNavigator()

const Tabs = AnimatedTabBarNavigator()
const HomeTabs = ({ navigation }) => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: colors.darkgreen,
        inactiveTintColor: '#FFFF',
        tabStyle: {
          backgroundColor: colors.green,
        },
      }}
      appearance={{
        activeTabBackgrounds: '#FFFF',
        floating: true,
        tabBarBackground: colors.darkgreen,
        dotSize: 'large',
      }}
    >
      <Tabs.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name='home'
              size={size ? size : 24}
              color={focused ? color : colors.darkgreen}
              focused={focused}
              color={color}
              style={!focused ? style.icon : ''}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='Articles'
        component={ArticlesScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Entypo
              name='text-document'
              size={size ? size : 24}
              color={focused ? color : colors.darkgreen}
              focused={focused}
              color={color}
              style={!focused ? style.icon : ''}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='Activities'
        component={ActivitiesScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name='yoga'
              size={size ? size : 24}
              color={focused ? color : colors.darkgreen}
              focused={focused}
              color={color}
              style={!focused ? style.icon : ''}
            />
          ),
        }}
      />

      <Tabs.Screen
        name='Games'
        component={GamesScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name='cards'
              size={size ? size : 24}
              color={focused ? color : colors.darkgreen}
              focused={focused}
              color={color}
              style={!focused ? style.icon : ''}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome
              name='user-circle'
              size={size ? size : 24}
              color={focused ? color : colors.darkgreen}
              focused={focused}
              color={color}
              style={!focused ? style.icon : ''}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  )
}

  
function App() {
  const [isReady, setisReady] = useState(false)

  const _cacheResourcesAsync = async () => {
    const images = [
      'https://app.Thallo.care/images/' + global.imgpart,
      'https://app.Thallo.care/images/' + global.imgpart2,
    ]

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync()
    })
    return Promise.all(cacheImages)
  }

  return isReady === false ? (
    <AppLoading
      startAsync={_cacheResourcesAsync}
      onFinish={() => setisReady(true)}
      onError={console.warn}
    />
  ) : (
    <NavigationContainer style={styles.container}>
      <StatusBar hidden />
      <RootStack.Navigator style={styles.navigator}>
        <RootStack.Screen
          name='Thallo'
          component={HomeTabs}
          options={{
            headerLeft: null,
            gestureEnabled: true,
            //headerRight: () => <Button onPress={handleSignOut} title="exit" />,
            headerStyle: {
              backgroundColor: colors.darkgreen,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              marginLeft: Platform.OS !== 'ios' ? '44%' : 0,
            },
          }}
        />

        <RootStack.Screen
          name='SingleActivity'
          component={SingleActivityScreen}
          options={{
            headerLeft: null,
            gestureEnabled: true,
            headerStyle: {
              backgroundColor: colors.darkgreen,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name='SingleArticle'
          component={SingleArticleScreen}
          options={{
            headerStyle: {
              backgroundColor: colors.darkgreen,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name='SingleGame'
          component={SingleGameScreen}
          options={{
            headerStyle: {
              backgroundColor: colors.darkgreen,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerLeft: null,
            gestureEnabled: true,
            //headerRight: () => <Button onPress={handleSignOut} title="exit" />,
            headerStyle: {
              backgroundColor: colors.darkgreen,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              marginLeft: Platform.OS !== 'ios' ? '44%' : 0,
            },
          }}
        />
        <RootStack.Screen
          name='Articles'
          component={ArticlesScreen}
          options={{
            gestureEnabled: true,
            //headerRight: () => <Button onPress={handleSignOut} title="exit" />,
            headerStyle: {
              backgroundColor: colors.darkgreen,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              marginLeft: Platform.OS !== 'ios' ? '44%' : 0,
            },
          }}
        />
        <RootStack.Screen
          name='Activities'
          component={ActivitiesScreen}
          options={{
            headerLeft: null,
            gestureEnabled: true,
            //headerRight: () => <Button onPress={handleSignOut} title="exit" />,
            headerStyle: {
              backgroundColor: colors.darkgreen,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              marginLeft: Platform.OS !== 'ios' ? '44%' : 0,
            },
          }}
        />
        <RootStack.Screen
          name='Games'
          component={GamesScreen}
          options={{
            headerLeft: null,
            gestureEnabled: true,
            //headerRight: () => <Button onPress={handleSignOut} title="exit" />,
            headerStyle: {
              backgroundColor: colors.darkgreen,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              marginLeft: Platform.OS !== 'ios' ? '44%' : 0,
            },
          }}
        />
        <RootStack.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            headerLeft: null,
            gestureEnabled: true,
            //headerRight: () => <Button onPress={handleSignOut} title="exit" />,
            headerStyle: {
              backgroundColor: colors.darkgreen,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              marginLeft: Platform.OS !== 'ios' ? '44%' : 0,
            },
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

const style = StyleSheet.create({
  icon: {
    backgroundColor: colors.darkgreen,
    padding: 10,
    borderRadius: 100,
  },
})

export default App
