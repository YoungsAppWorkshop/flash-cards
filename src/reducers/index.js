import { combineReducers } from 'redux'

import cards from './cards'
import decks from './decks'
import notifications from './notifications'

const rootReducer = combineReducers({
  cards,
  decks,
  notifications,
})

export default rootReducer
