import PropTypes from 'prop-types'
import React from 'react'
import {
  Alert, Platform, Text, TextInput, TouchableWithoutFeedback, View
} from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

import { CARD_LAYOUT, DECK_LAYOUT } from '../../constants/DeckLayouts'
import { CARDS_SCREEN } from '../../constants/Routes'
import { btn } from '../../styles/btn'
import { text } from '../../styles/text'
import { textInput } from '../../styles/textInput'
import { margin } from '../../styles/utils'
import { view } from '../../styles/view'
import { validate } from '../../utils/helpers'



/**
 * Presentational Component which represents a DeckEditForm
 */
class DeckEditForm extends React.Component {
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
     * An Event handler fuction for onPress event
     */
    toggleEditable: PropTypes.func.isRequired,
  }

  // Define state to control user input
  state = {
    inputText: '',
    isInputValid: null,
  }

  // Initialize edit form when component did mount
  componentDidMount() {
    const { deck } = this.props
    this.setState({ inputText: deck.title })
  }

  // Delete deck if user confirms
  deleteDeck = () => {
    const { actions, deck } = this.props
    Alert.alert(
      'Alert',
      'Do you want to delete the deck?\nAll cards in deck will be deleted.',
      [
        {text: 'Cancel'},
        {text: 'Delete', onPress: () => {
          actions.deleteCardsInDeck(deck.id)
          actions.deleteDeck(deck.id)
        }},
      ],
    )
  }

  // If user input is valid, edit the Deck
  editDeck = () => {
    const { inputText, isInputValid } = this.state
    const { actions, deck, toggleEditable } = this.props

    if ( isInputValid ) {
      const editedDeck = {
        ...deck,
        title: inputText,
      }
      this.setState({ isInputValid: null })
      actions.editDeck(editedDeck)
      toggleEditable()
    } else {
      Alert.alert('Information', 'Deck Title required.\n(up to 15 characters)')
      this.setState({ inputText: deck.title })
    }
  }

  // Update state when User types Deck title
  handleTextChange = (inputText) => {
    this.setState({ inputText })
  }

  // On Submit, validate inputText and call back editDeck method
  validateInput = () => {
    const { inputText, isInputValid } = this.state
    this.setState({ isInputValid: validate(inputText) }, this.editDeck)
  }

  render() {
    const { inputText } = this.state
    const { deck, layout, toggleEditable } = this.props

    if ( layout === CARD_LAYOUT ) {
      return (
        <View style={[view.card, view.deckListItem, { backgroundColor: deck.deckColor }]}>

          <TextInput
            maxLength={15}
            onChangeText={this.handleTextChange}
            onSubmitEditing={this.validateInput}
            placeholder='Deck Title (up to 15 characters)'
            returnKeyType = {'send'}
            selectTextOnFocus={true}
            style={[textInput.edit, textInput.editDeck]}
            value={inputText}
          />

          <Text style={[text.deckBody, margin('top')(10)]}>{deck.cardCount} cards</Text>

          <View style={view.buttonGroup}>
            <TouchableWithoutFeedback onPress={this.deleteDeck}>
              <View style={[btn.small, margin('right')(10)]}>
                <Text style={text.btnSmall}>
                  { Platform.OS === 'ios' ?
                    <Ionicons name='ios-trash-outline' size={30} /> :
                    <MaterialIcons name='delete' size={30} />
                  }
                </Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={toggleEditable}>
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

    if ( layout === DECK_LAYOUT ) {
      return (
        <View style={[view.card, view.deckLayout, { backgroundColor: deck.deckColor }]}>

          <TextInput
            maxLength={15}
            onChangeText={this.handleTextChange}
            onSubmitEditing={this.validateInput}
            placeholder='Deck Title (up to 15 characters)'
            returnKeyType = {'send'}
            selectTextOnFocus={true}
            style={[textInput.edit, textInput.editDeck]}
            value={inputText}
          />

          <Text style={[text.deckBody, margin('top')(10)]}>{deck.cardCount} cards</Text>

          <View style={view.buttonGroup}>
            <TouchableWithoutFeedback onPress={toggleEditable}>
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

export default DeckEditForm
