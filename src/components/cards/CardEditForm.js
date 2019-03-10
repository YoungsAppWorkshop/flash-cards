import PropTypes from 'prop-types'
import React from 'react'
import {
  Alert, Platform, Text, TextInput, TouchableWithoutFeedback, View
} from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

import { btn } from '../../styles/btn'
import { margin } from '../../styles/utils'
import { text } from '../../styles/text'
import { textInput } from '../../styles/textInput'
import { view } from '../../styles/view'
import { validateInputs } from '../../utils/helpers'



/**
 * Presentational Component which represents CardEditForm for a Card
 */
class CardEditForm extends React.Component {
  static propTypes = {
    /**
     * Redux Action creators
     */
    actions: PropTypes.object.isRequired,
    /**
     * A Card object which stores question and answer
     */
    card: PropTypes.object.isRequired,
    /**
     * A Flag variable which represents if the card is editable
     */
    editable: PropTypes.bool.isRequired,
    /**
     * An Event handler fuction for onPress event
     */
    toggleEditable: PropTypes.func.isRequired,
  }

  // Define state for form control
  state = {
    cardForm: { answer: '', question: '' },
    isInputValid: { answer: null, question: null },
  }

  // Initialize edit form when component did mount
  componentDidMount() {
    const { card } = this.props
    this.setState({ cardForm: { answer: card.answer, question: card.question }})
  }

  // Delete card if user confirms
  deleteCard = () => {
    const { actions, card } = this.props
    Alert.alert(
      'Alert',
      'Do you want to delete the card?',
      [
        {text: 'Cancel'},
        {text: 'Delete', onPress: () => {
          actions.deleteCard(card.id)
          actions.decrementCardCount(card.parentId)
        }},
      ],
    )
  }

  // If user input is valid, edit the card
  editCard = () => {
    const { cardForm, isInputValid } = this.state
    const { actions, card, toggleEditable } = this.props
    const isFormValid = Object.values(isInputValid).reduce((a, c) => a && c)

    if ( isFormValid ) {
      const editedCard = {
        ...card,
        answer: cardForm.answer,
        question: cardForm.question
      }
      this.setState({ isInputValid: { answer: null, question: null } })
      actions.editCard(editedCard)
      toggleEditable()
    } else {
      Alert.alert('Information', 'Question and Answer are required.')
      this.setState({ cardForm: { answer: card.answer, question: card.question }})
    }
  }

  // Focus AnswerTextInput when user tapped 'next' on QuestionTextInput
  focusAnswerTextInput = () => {
    this.answerInput.focus()
  }

  // Update state on User input answer
  handleAnswerChange = answer => {
    this.setState({ cardForm: { ...this.state.cardForm, answer }})
  }

  // Update state on User input question
  handleQuestionChange = question => {
    this.setState({ cardForm: { ...this.state.cardForm, question }})
  }

  // On submit, validate inputs and call back editCard method
  validateInputs = () => {
    const { cardForm, isInputValid } = this.state
    this.setState({ isInputValid: validateInputs(cardForm) }, this.editCard)
  }

  render() {
    const { cardForm } = this.state
    const { toggleEditable } = this.props

    return (
      <View style={[view.card, view.cardListItem]}>

        <View style={[view.line, margin('top')(10)]}>
          <View style={view.lineHead}><Text style={text.lineHead}>Q:</Text></View>
          <View style={view.lineBody}>
            <TextInput
              onChangeText={this.handleQuestionChange}
              onSubmitEditing={this.focusAnswerTextInput}
              placeholder='Where is the Best place to learn React?'
              returnKeyType = {'next'}
              selectTextOnFocus={true}
              style={textInput.edit}
              value={cardForm.question}
            />
          </View>
        </View>

        <View style={[view.line, margin('bottom')(10), margin('top')(5)]}>
          <View style={view.lineHead}><Text style={text.lineHead}>A:</Text></View>
          <View style={view.lineBody}>
            <TextInput
              blurOnSubmit={true}
              onChangeText={this.handleAnswerChange}
              onSubmitEditing={this.validateInputs}
              placeholder='Udacity'
              ref={input => this.answerInput = input}
              returnKeyType = {'send'}
              selectTextOnFocus={true}
              style={textInput.edit}
              value={cardForm.answer}
            />
          </View>
        </View>

        <View style={view.buttonGroup}>
          <TouchableWithoutFeedback onPress={this.deleteCard}>
            <View style={[btn.small, margin('right')(5)]}>
              <Text style={text.btnSmall}>
                { Platform.OS === 'ios' ?
                  <Ionicons name='ios-trash-outline' size={25} /> :
                  <MaterialIcons name='delete' size={25} />
                }
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={toggleEditable}>
            <View style={btn.small}>
              <Text style={text.btnSmall}>
                { Platform.OS === 'ios' ?
                  <Ionicons name='ios-more' size={25} /> :
                  <MaterialIcons name='more-horiz' size={25} />
                }
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

      </View>
    )
  }
}

export default CardEditForm
