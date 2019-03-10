import * as types from '../constants/ActionTypes'
import { deleteAllCardsInDeck, selectCards } from '../utils/helpers'

const initialState = {
  allItems: {
    '894tuq4ut84ut8v4t8wun89g': {
      answer: 'Udacity',
      id: '894tuq4ut84ut8v4t8wun89g',
      parentId: '8xf0y6ziyjabvozdd253nd',
      question: 'Where is the best place to learn about React?',
      timestamp: 1468166872634,
    },
    '8tu4bsun805n8un48ve89': {
      answer: 'Underpaid, overworked nameless developers',
      id: '8tu4bsun805n8un48ve89',
      parentId: '6ni6ok3ym7mf1p33lnez',
      question: 'Who invented the legendary smart-phone, iPhone?',
      timestamp: 1469479767190,
    },
    'ut84ut8894tuq4v4t8wun89g': {
      answer: 'Yes',
      id: 'ut84ut8894tuq4v4t8wun89g',
      parentId: '8xf0y6ziyjabvozdd253nd',
      question: 'Does React Native work with Android?',
      timestamp: 1468166872634,
    },
  },
  selectedCards: {},
}

const cards = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CARD :
    case types.EDIT_CARD :
      return {
        ...state,
        allItems: {
          ...state.allItems,
          [action.card.id]: action.card
        },
        selectedCards: {
          ...state.selectedCards,
          [action.card.id]: action.card
        }
      }
    case types.DELETE_CARD :
      let allItems = state.allItems
      let selectedCards = state.selectedCards
      delete allItems[action.cardId]
      delete selectedCards[action.cardId]

      return {
        ...state,
        allItems,
        selectedCards
      }
    case types.DELETE_CARDS_IN_DECK :
      return {
        ...state,
        allItems: deleteAllCardsInDeck(state.allItems, action.parentId),
        selectedCards: {},
      }
    case types.SELECT_CARDS :
      return {
        ...state,
        selectedCards: selectCards(state.allItems, action.parentId)
      }
    case types.UNSELECT_CARDS :
      return {
        ...state,
        selectedCards: {},
      }
    default:
      return state
  }
}

export default cards
