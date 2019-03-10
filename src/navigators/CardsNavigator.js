import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import { ADD_CARD_SCREEN, CARDS_SCREEN, QUIZ_SCREEN } from '../constants/Routes'
import AddCardScreen from '../containers/cards/AddCardScreen'
import CardsScreen from '../containers/cards/CardsScreen'
import QuizScreen from '../containers/cards/QuizScreen'
import { TabNavigatorConfig } from '../utils/config'

/**
 * A TabNavigator for a individual Deck(cards)
 */
const CardsNavigator = createBottomTabNavigator({
  [CARDS_SCREEN]: {
    screen: CardsScreen,
    navigationOptions: {
      tabBarLabel: 'Cards',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-albums' size={30} color={tintColor} />
    },
  },
  [ADD_CARD_SCREEN]: {
    screen: AddCardScreen,
    navigationOptions: {
      tabBarLabel: 'Add Card',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-photos' size={30} color={tintColor} />
    },
  },
  [QUIZ_SCREEN]: {
    screen: QuizScreen,
    navigationOptions: {
      tabBarLabel: 'Quiz',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='question' size={30} color={tintColor} />
    },
  },
}, TabNavigatorConfig)

export default CardsNavigator
