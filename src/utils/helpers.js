import { Notifications, Permissions } from 'expo'

import { colorPalette } from '../styles/colors'

// Clear Local Notification for the day
export const clearLocalNotification = () =>
  Notifications.cancelAllScheduledNotificationsAsync()

// Create Local Notification message
export const createNotification = () => ({
  title: 'Quiz for Today!',
  body: "Don't forget to study and complete today's Quiz!",
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  }
})

// Select Cards for selected Deck
export const deleteAllCardsInDeck = (cards, parentId) => Object.values(cards)
  .filter(card => card.parentId !== parentId ).reduce((acc, curr) => {
      acc[curr.id] = curr
      return acc
    }, {})

// Format Score in percentage
export const formatScore = score =>
  Math.floor(score * 100) + ' %'

// Select Deck Color based on # of decks
export const selectDeckColor = numOfDecks =>
  colorPalette[(numOfDecks % colorPalette.length)]

// Select Cards for selected Deck
export const selectCards = (cards, parentId) => Object.values(cards)
  .filter(card => card.parentId === parentId ).reduce((acc, curr) => {
      acc[curr.id] = curr
      return acc
    }, {})

// Set Local Notification for tomorrow, and return a boolean if it's set
export const setLocalNotification = isSet => {
  // If LocalNotification is not set,
  if ( !isSet ) {
    Permissions.askAsync(Permissions.NOTIFICATIONS)
      .then(({ status }) => {
        // And Permission for the Notification is granted
        if (status === 'granted') {
          Notifications.cancelAllScheduledNotificationsAsync()
          // Set Local Notification for tomorrow PM 08:00, repeated daily
          let tomorrow = new Date()
          tomorrow.setDate(tomorrow.getDate() + 1)
          tomorrow.setHours(20)
          tomorrow.setMinutes(0)
          tomorrow.setSeconds(0)

          Notifications.scheduleLocalNotificationAsync(
            createNotification(),
            { time: tomorrow, repeat: 'day' }
          )
          return true
        }
        return false
      })
  }
  // When LocalNotification is already set, return the boolean
  return isSet
}

// Shuffle Cards for Quiz using Fisher–Yates shuffle Algorithm
export const shuffleCards = cards => {
  let index = cards.length, temp, randomIndex

  // While there remain elements to shuffle…
  while (index) {
    // Pick a remaining element…
    randomIndex = Math.floor(Math.random() * index--)
    // And swap it with the current element.
    temp = cards[index]
    cards[index] = cards[randomIndex]
    cards[randomIndex] = temp
  }
  return cards
}

// Validate a single input string if it's not ''
export const validate = inputStr => (
  (typeof inputStr === 'string') && (inputStr.trim() !== '')
)

// Validate several input strings if they're not ''
export const validateInputs = form => Object.keys(form).reduce((a, c) => {
  a[c] = validate(form[c])
  return a
}, {})
