import * as types from '../constants/ActionTypes'

/**
 * Action Creators for Cards
 */

// Add a new Card
export const addCard = card => ({ type: types.ADD_CARD, card })

// Delete a Card
export const deleteCard = cardId => ({ type: types.DELETE_CARD, cardId })

// Delete all Cards in a Deck
export const deleteCardsInDeck = parentId => ({ type: types.DELETE_CARDS_IN_DECK, parentId })

// Edit a Card (question and answer)
export const editCard = card => ({ type: types.EDIT_CARD, card })

// Select Cards for a deck
export const selectCards = parentId => ({ type: types.SELECT_CARDS, parentId })

// Unselect Cards
export const unselectCards = () => ({ type: types.UNSELECT_CARDS })



/**
 * Action Creators for Decks
 */

// Add a new Deck
export const addDeck = deck => ({ type: types.ADD_DECK, deck })

// Delete a Deck
export const deleteDeck = deckId => ({ type: types.DELETE_DECK, deckId })

// Edit a Deck (title)
export const editDeck = deck => ({ type: types.EDIT_DECK, deck })

// Decrement Card count when a card is deleted
export const decrementCardCount = deckId => ({ type: types.DECREMENT_CARD_COUNT, deckId })

// Increment Card count when a new card is created
export const incrementCardCount = deckId => ({ type: types.INCREMENT_CARD_COUNT, deckId })

// Select a Deck when user navigate from one screen to another
export const selectDeck = deckId => ({ type: types.SELECT_DECK, deckId })

// Unelect a Deck when user navigate from one screen to another
export const unselectDeck = () => ({ type: types.UNSELECT_DECK })

// Update Max score for quiz
export const updateMaxScore = payload => ({ type: types.UPDATE_MAX_SCORE, payload })



/**
 * Action Creators for Notifications
 */

// Clear Local Notification
export const clearNotification = () => ({ type: types.CLEAR_NOTIFICATION })

// Set Local Notification
export const setNotification = () => ({ type: types.SET_NOTIFICATION })
