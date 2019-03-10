import { StyleSheet } from 'react-native'

import {
  black, gray, grayLight, primaryLight, secondaryDark, secondaryDarker, white
} from './colors'

export const btn = StyleSheet.create({
  /**
   * Styles for AddButton
   */
  add: {
    alignItems: 'center',
    borderColor: gray,
    borderRadius: 10,
    borderStyle: 'dashed',
    borderWidth: 3,
    height: 150,
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },

  /**
   * Styles for Flip Card button(Quiz)
   */
  flip: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    width: 100,
  },

  /**
   * Styles for Primary button(Quiz)
   */
  primary: {
    alignItems: 'center',
    backgroundColor: primaryLight,
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    width: 120,
  },

  /**
   * Styles for Secondary button(Quiz)
   */
  secondary: {
    alignItems: 'center',
    backgroundColor: secondaryDark,
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    width: 120,
  },

  /**
   * Styles for Small button(Card/Deck)
   */
  small: {
    alignItems: 'center',
    width: 30,
  },

  /**
   * Styles for ToggleCardsListButton
   */
  toggle: {
    alignItems: 'center',
    backgroundColor: grayLight,
    borderRadius: 5,
    height: 100,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    shadowColor: black,
    shadowOpacity: 0.3,
  },
})
