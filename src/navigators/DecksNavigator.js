import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import { ADD_DECK_SCREEN, DECKS_SCREEN } from '../constants/Routes'
import AddDeckScreen from '../containers/decks/AddDeckScreen'
import DecksScreen from '../containers/decks/DecksScreen'
import { TabNavigatorConfig } from '../utils/config'

/**
 * A TabNavigator for Decks
 */
const DecksNavigator = createBottomTabNavigator({
  [DECKS_SCREEN]: {
    screen: DecksScreen,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-albums' size={30} color={tintColor} />
    },
  },
  [ADD_DECK_SCREEN]: {
    screen: AddDeckScreen,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-photos' size={30} color={tintColor} />
    },
  },
}, TabNavigatorConfig)

export default DecksNavigator
