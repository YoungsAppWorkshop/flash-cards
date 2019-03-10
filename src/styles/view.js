import { StyleSheet } from 'react-native'

import { black, white } from './colors'

export const view = StyleSheet.create({
  /**
   * Styles for Wrapper View
   */
  container: {
    elevation: 0,
    flex: 1,
    padding: 10,
  },

  /**
   * Styles for Various Cards layout(Card, Deck, Quiz)
   */
  card: {
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: 5,
    elevation: 3,
    justifyContent: 'center',
    shadowColor: black,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
  },

  // Cards layout(AddCard/AddDeck/Quiz/QuizReult)
  cardBig: {
    flex: 1,
    marginBottom: 10,
    padding: 15,
  },

  // Card ListItem layout
  cardListItem: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    minHeight: 150,
    padding: 10,
  },

  // Cards layout(Quiz)
  cardQuiz: {
    alignItems: 'stretch',
    backfaceVisibility: 'hidden',
    elevation: 0,
    justifyContent: 'space-between',
    margin: 10,
    padding: 15,
  },
  cardQuizBack: {
    position: 'absolute',
    top: 0,
  },

  // Deck layout(Deck in CardsScreen)
  deckLayout: {
    borderRadius: 0,
    elevation: 5,
    height: 200,
    shadowOffset: { width: 0, height: 5 },
  },

  // Deck ListItem layout(ListItem in DecksScreen)
  deckListItem: {
    height: 200,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  // Card Line layout(CardsScreen/AddCard Screen)
  line: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  lineHead: {
    width: 30,
  },
  lineBody: {
    flex: 1,
  },

  // Quiz Count Display(QuizResult)
  quizCount: {
    flexDirection: 'row',
    marginTop: 20,
  },

  // Button Group (CardEditForm, DeckEditForm)
  buttonGroup: {
    flexDirection: 'row',
    position: 'absolute',
    right: 5,
    top: 5,
  },
})
