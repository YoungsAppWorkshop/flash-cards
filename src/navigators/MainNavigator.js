import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import { CARDS_NAVIGATOR, DECKS_NAVIGATOR } from '../constants/Routes'
import CardsNavigator from './CardsNavigator'
import DecksNavigator from './DecksNavigator'
import { StackNavigatorConfig } from '../utils/config'

/**
 * The main navigator for the app
 */
const MainNavigator = createAppContainer(createStackNavigator({
  [DECKS_NAVIGATOR]: {
    screen: DecksNavigator,
  },
  [CARDS_NAVIGATOR]: {
    screen: CardsNavigator,
  },
}, StackNavigatorConfig))

export default MainNavigator
