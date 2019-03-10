import * as types from '../constants/ActionTypes'

const initialState = {
  items: {
    '8xf0y6ziyjabvozdd253nd': {
      cardCount: 2,
      deckColor: '#FF8F00',
      id: '8xf0y6ziyjabvozdd253nd',
      maxScore: 0.5,
      timestamp: 1467166872634,
      title: 'React',
    },
    '6ni6ok3ym7mf1p33lnez': {
      cardCount: 1,
      deckColor: '#FFB300',
      id: '6ni6ok3ym7mf1p33lnez',
      maxScore: 1,
      timestamp: 1468479767190,
      title: 'iOS',
    },
    '8ki3lnez7mf16ok3ymp3': {
      cardCount: 0,
      deckColor: '#FFCA28',
      id: '8ki3lnez7mf16ok3ymp3',
      maxScore: 0,
      timestamp: 1513320276285,
      title: 'Android',
    }
  },
  selectedDeckId: null,
}

const decks = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_DECK :
    case types.EDIT_DECK :
      return {
        ...state,
        items: {
          ...state.items,
          [action.deck.id]: action.deck
        }
      }
    case types.DECREMENT_CARD_COUNT :
      return {
        ...state,
        items: {
          ...state.items,
          [action.deckId]: {
            ...state.items[action.deckId],
            cardCount: --state.items[action.deckId].cardCount,
          }
        },
      }
    case types.DELETE_DECK :
      let items = state.items
      delete items[action.deckId]

      return {
        ...state,
        items,
      }
    case types.INCREMENT_CARD_COUNT :
      return {
        ...state,
        items: {
          ...state.items,
          [action.deckId]: {
            ...state.items[action.deckId],
            cardCount: ++state.items[action.deckId].cardCount,
          }
        },
      }
    case types.SELECT_DECK :
      return {
        ...state,
        selectedDeckId: action.deckId,
      }
    case types.UNSELECT_DECK :
      return {
        ...state,
        selectedDeckId: null,
      }
    case types.UPDATE_MAX_SCORE :
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            ...state.items[action.payload.id],
            maxScore: action.payload.score,
          }
        }
      }
    default:
      return state
  }
}

export default decks
