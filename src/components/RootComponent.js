import { Constants } from 'expo'
import React from 'react'
import { StatusBar, View  } from 'react-native'

import MainNavigator from '../navigators/MainNavigator'
import { flex } from '../styles/utils'
import { primary } from '../styles/colors'

// Customize status bar
const CustomStatusBar = ({backgroundColor, ...props}) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

/**
 * Root Component of the App
 */
const RootComponent = () => (
  <View style={flex.one}>
    <CustomStatusBar backgroundColor={primary} barStyle="light-content"/>
    <MainNavigator />
  </View>
)

export default RootComponent
