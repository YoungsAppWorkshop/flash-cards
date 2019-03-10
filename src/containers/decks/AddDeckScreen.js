import { Constants } from 'expo'
import PropTypes from 'prop-types'
import React from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import uuidv4 from 'uuid/v4'

import * as Actions from '../../actions'
import AddDeck from '../../components/decks/AddDeck'
import { DECKS_SCREEN } from '../../constants/Routes'
import { primary, white } from '../../styles/colors'
import { selectDeckColor, validate } from '../../utils/helpers'

/**
 * Container Component which represents Add Deck screen
 */
class AddDeckScreen extends React.Component {
  static propTypes = {
    /**
     * Redux Action creators for decks
     */
    actions: PropTypes.object.isRequired,
    /**
     * A navigation object of react-navigation
     */
    navigation: PropTypes.object.isRequired,
    /**
     * Number of decks
     */
    numOfDecks: PropTypes.number.isRequired,
  }

  // Define state to control user input
  state = {
    inputText: '',
    isInputValid: null,
  }

  // Update state when User types Deck title
  handleTextChange = (inputText) => {
    this.setState({ inputText })
  }

  // When add button clicked, validate inputText and call back addDeck method
  validateInput = () => {
    const { inputText, isInputValid } = this.state
    this.setState({ isInputValid: validate(inputText) }, this.addDeck)
  }

  // If user input is valid, add a new Deck and navigate to DecksScreen
  addDeck = () => {
    const { inputText, isInputValid } = this.state
    const { actions, navigation, numOfDecks } = this.props

    if ( isInputValid ) {
      const id = uuidv4()
      const timestamp = Date.now()
      const newDeck = {
        cardCount: 0, deckColor: selectDeckColor(numOfDecks),
        id, maxScore: 0, timestamp, title: inputText.trim()
      }

      actions.addDeck(newDeck)
      this.setState({ inputText: '', isInputValid: null })
      navigation.navigate(DECKS_SCREEN)
      Alert.alert('Information', 'New Deck is successfully created.')

    } else {
      Alert.alert('Information', 'Deck Title required.\n(up to 15 characters)')
    }
  }

  render() {
    const { inputText } = this.state
    const { numOfDecks } = this.props

    return (
      <AddDeck
        deckColor={selectDeckColor(numOfDecks)}
        handleInputChange={this.handleTextChange}
        handleSubmit={this.validateInput}
        inputText={inputText}
      />
    )
  }
}

const mapStateToProps = state => ({
  numOfDecks: Object.keys(state.decks.items).length,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDeckScreen)
