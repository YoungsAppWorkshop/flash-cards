import { StyleSheet } from 'react-native'

import { black, gray, primaryLight, secondaryDarker, white } from './colors'

export const text = StyleSheet.create({

  /**
   * Styles for Text in Cards layout(Cards, Decks, Quizzes)
   */
  cardHeader: {
    fontSize: 20,
  },
  cardBody: {
    color: black,
    fontSize: 40,
    textAlign: 'center',
  },

  /**
   * Styles for Text in Decks(Deck, DeckEditForm)
   */
  deckTitle: {
    color: black,
    fontSize: 40,
  },
  deckBody: {
    color: gray,
    fontSize: 20,
  },

  /**
   * Styles for Text in Cards lines(Card, CardEditForm)
   */
  lineHead: {
    color: black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  lineBody: {
    color: gray,
    fontSize: 20,
    fontStyle: 'italic',
  },

  /**
   * Styles for Text in Buttons
   */
  btn: {
    color: white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnAdd: {
    color: gray,
    fontSize: 20,
  },
  btnFlip: {
    color: secondaryDarker,
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnIcon: {
    color: gray,
    textAlign: 'center',
  },
  btnSmall: {
    color: gray,
  },
  btnToggle: {
    color: gray,
    fontSize: 20,
    fontWeight: 'bold',
  },

  /**
   * Styles for QuizResult
   */
  quizResultCorrect: {
    color: primaryLight,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  quizResultIncorrect: {
    color: secondaryDarker,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  quizResultLabel: {
    color: gray,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  quizResultScore: {
    color: black,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  },
})
