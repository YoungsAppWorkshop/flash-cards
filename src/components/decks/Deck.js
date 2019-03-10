import PropTypes from 'prop-types'
import React from 'react'
import { Animated, Platform, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

import { CARD_LAYOUT, DECK_LAYOUT } from '../../constants/DeckLayouts'
import { CARDS_NAVIGATOR } from '../../constants/Routes'
import { btn } from '../../styles/btn'
import { text } from '../../styles/text'
import { margin } from '../../styles/utils'
import { view } from '../../styles/view'



/**
 * Presentational Component which represents a Deck
 */
class Deck extends React.Component {
  static propTypes = {
    /**
     * Redux Action creators
     */
    actions: PropTypes.object.isRequired,
    /**
     * A Deck object
     */
    deck: PropTypes.object.isRequired,
    /**
     * A Flag variable which represents if the deck is editable
     */
    editable: PropTypes.bool.isRequired,
    /**
     * A constant which represents a layout for the deck
     */
    layout: PropTypes.string.isRequired,
    /**
     * A navigation object of react-navigation
     */
    navigation: PropTypes.object,
    /**
     * An Event handler fuction for onPress event
     */
    onPressMoreBtn: PropTypes.func.isRequired,
  }

  // Define state for rendering animation
  state = {
    animatedValue: new Animated.Value(5),
    disabled: false,
  }

  // On Select, show animation, select the deck and navigate to Cards Screen
  onSelectDeck = () => {
    const { animatedValue } = this.state
    const { actions, deck, navigation } = this.props

    // Select the Deck and Cards
    actions.selectDeck(deck.id)
    actions.selectCards(deck.id)
    // Disable button to prevent double tap
    this.setState({ disabled: true })
    setTimeout(() => this.setState({ disabled: false }), 500)
    // Show Animation
    Animated.timing(animatedValue, {
      duration: 200, toValue: 1
    }).start(() => {
      // Navigate to CardsNavigator(CardsScreen)
      navigation.navigate(CARDS_NAVIGATOR)
      Animated.timing(animatedValue, {
        duration: 200, toValue: 5
      }).start()
    })
  }

  render() {
    const { animatedValue, disabled } = this.state
    const { deck, layout, onPressMoreBtn } = this.props
    const animatedStyle = {
      elevation: animatedValue,
      shadowOffset: { width: animatedValue, height: animatedValue },
    }

    if ( layout === CARD_LAYOUT ) {
      return (
        <TouchableWithoutFeedback disabled={disabled} onPress={this.onSelectDeck}>
          <Animated.View style={[view.card, view.deckListItem, animatedStyle, { backgroundColor: deck.deckColor }]}>

            <Text style={text.deckTitle}>{deck.title}</Text>
            <Text style={[text.deckBody, margin('top')(10)]}>{deck.cardCount} cards</Text>

            <View style={view.buttonGroup}>
              <TouchableWithoutFeedback onPress={onPressMoreBtn}>
                <View style={btn.small}>
                  <Text style={text.btnSmall}>
                    { Platform.OS === 'ios' ?
                      <Ionicons name='ios-more' size={30} /> :
                      <MaterialIcons name='more-horiz' size={30} />
                    }
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>

          </Animated.View>
        </TouchableWithoutFeedback>
      )
    }

    if ( layout === DECK_LAYOUT ) {
      return (
        <View style={[view.card, view.deckLayout, { backgroundColor: deck.deckColor }]}>

          <Text style={text.deckTitle}>{deck.title}</Text>
          <Text style={[text.deckBody, margin('top')(10)]}>{deck.cardCount} cards</Text>

          <View style={view.buttonGroup}>
            <TouchableWithoutFeedback onPress={onPressMoreBtn}>
              <View style={btn.small}>
                <Text style={text.btnSmall}>
                  { Platform.OS === 'ios' ?
                    <Ionicons name='ios-more' size={30} /> :
                    <MaterialIcons name='more-horiz' size={30} />
                  }
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

        </View>
      )
    }
  }
}

export default Deck
