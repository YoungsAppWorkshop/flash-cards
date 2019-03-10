import { Constants } from 'expo'
import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import { CARDS_NAVIGATOR, DECKS_NAVIGATOR } from '../constants/Routes'
import CardsNavigator from './CardsNavigator'
import DecksNavigator from './DecksNavigator'
import { StackNavigatorConfig } from '../utils/config'
import { primary, white } from '../styles/colors'

/**
 * The main navigator for the app
 */
const MainNavigator = createAppContainer(createStackNavigator({
  [DECKS_NAVIGATOR]: {
    screen: DecksNavigator,
    navigationOptions: () => ({
      title: `Decks`,
      headerStyle: {
        backgroundColor: primary,
        marginTop: -Constants.statusBarHeight,
      },
      headerTintColor: white
    })
  },
  [CARDS_NAVIGATOR]: {
    screen: CardsNavigator,
    navigationOptions: () => ({
      title: `Cards List`,
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: primary,
        marginTop: -Constants.statusBarHeight,
      },
      headerTintColor: white,
    }),
  },
}, StackNavigatorConfig))

export default MainNavigator
