import { Constants } from 'expo'
import PropTypes from 'prop-types'
import React from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import uuidv4 from 'uuid/v4'

import * as Actions from '../../actions'
import AddCard from '../../components/cards/AddCard'
import { CARDS_SCREEN } from '../../constants/Routes'
import { primary, white } from '../../styles/colors'
import { validateInputs } from '../../utils/helpers'

/**
 * Container Component which represents Add Card screen
 */
class AddCardScreen extends React.Component {
  static propTypes = {
    /**
     * Redux Action creators
     */
    actions: PropTypes.object.isRequired,
    /**
     * A navigation object of react-navigation
     */
    navigation: PropTypes.object.isRequired,
    /**
     * A string which represents the id of the selected Deck
     */
    selectedDeckId: PropTypes.string.isRequired,
  }

  // Define StackNavigator options for the screen
  static navigationOptions = {
    title: 'Add Card',
    headerTintColor: white,
    headerStyle: {
      backgroundColor: primary,
      marginTop: -Constants.statusBarHeight,
    }
  }

  // Define state to control user inputs
  state = {
    cardForm: { answer: '', question: '' },
    isInputValid: { answer: null, question: null },
  }

  // Update state on User input answer
  handleAnswerChange = answer => {
    this.setState({ cardForm: { ...this.state.cardForm, answer }})
  }

  // Update state on User input question
  handleQuestionChange = question => {
    this.setState({ cardForm: { ...this.state.cardForm, question }})
  }

  // When add button clicked, validate inputs and call back addCard method
  validateInputs = () => {
    const { cardForm, isInputValid } = this.state
    this.setState({ isInputValid: validateInputs(cardForm) }, this.addCard)
  }

  // If user input is valid, add a new Card and navigate to CardsScreen
  addCard = () => {
    const { cardForm, isInputValid } = this.state
    const { actions, navigation, selectedDeckId } = this.props
    const isFormValid = Object.values(isInputValid).reduce((a, c) => a && c)

    if ( isFormValid ) {
      const id = uuidv4()
      const timestamp = Date.now()
      const newCard = {
        id, timestamp,
        answer: cardForm.answer.trim(),
        parentId: selectedDeckId,
        question: cardForm.question.trim()
      }

      this.setState({
        cardForm: { answer: '', question: '' },
        isInputValid: { answer: null, question: null },
      })
      actions.addCard(newCard)
      actions.incrementCardCount(selectedDeckId)

      Alert.alert('Information', 'New Card is successfully created.')
      navigation.navigate(CARDS_SCREEN)

    } else {
      Alert.alert('Information', 'Question and Answer are required.')
    }
  }

  render() {
    const { cardForm } = this.state

    return (
      <AddCard
        cardForm={cardForm}
        handleAnswerChange={this.handleAnswerChange}
        handleQuestionChange={this.handleQuestionChange}
        handleSubmit={this.validateInputs}
      />
    )
  }
}

const mapStateToProps = state => ({
  selectedDeckId: state.decks.selectedDeckId,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCardScreen)
