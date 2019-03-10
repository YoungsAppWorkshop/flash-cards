import { StyleSheet } from 'react-native'

import { gray, grayLight, white } from './colors'

export const textInput = StyleSheet.create({
  /**
   * Styles for Add Card/Deck Form
   */
  add: {
    backgroundColor: white,
    borderColor: gray,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },

  /**
   * Styles for Edit form(Card/Deck)
   */
  edit: {
    backgroundColor: grayLight,
    borderRadius: 5,
    height: 24,
    paddingLeft: 5,
    paddingRight: 5,
  },

  /**
   * Styles for Edit Deck form
   */
  editDeck: {
    borderColor: gray,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 50,
    padding: 10,
    width: 250,
  },
})
