import PropTypes from 'prop-types'
import React from 'react'
import { KeyboardAvoidingView, Text, TextInput, View } from 'react-native'

import { margin } from '../../styles/utils'
import { text } from '../../styles/text'
import { textInput } from '../../styles/textInput'
import { view } from '../../styles/view'



/**
 * Presentational Component which represents layout of Add Card screen
 */
const AddCard = (props) => {
  const { cardForm, handleAnswerChange, handleQuestionChange, handleSubmit } = props

  // Focus AnswerTextInput when user tapped 'next' button on keyboard
  const focusAnswerTextInput = () => {
    answerInput.focus()
  }

  return (
    <KeyboardAvoidingView style={view.container} behavior='padding'>
      <View style={[view.card, view.cardBig]}>

        <Text style={[text.cardBody, margin('bottom')(50)]}>Add Card</Text>

        <View style={view.line}>
          <View style={view.lineHead}><Text style={text.lineHead}>Q:</Text></View>
          <View style={view.lineBody}>
            <TextInput
              onChangeText={handleQuestionChange}
              onSubmitEditing={focusAnswerTextInput}
              placeholder='Where is the Best place to learn React?'
              returnKeyType={'next'}
              style={textInput.add}
              value={cardForm.question}
            />
          </View>
        </View>

        <View style={[view.line, margin('top')(10)]}>
          <View style={view.lineHead}><Text style={text.lineHead}>A:</Text></View>
          <View style={view.lineBody}>
            <TextInput
              blurOnSubmit={true}
              onChangeText={handleAnswerChange}
              onSubmitEditing={handleSubmit}
              placeholder='Udacity'
              ref={input => answerInput = input}
              returnKeyType={'send'}
              style={textInput.add}
              value={cardForm.answer}
            />
          </View>
        </View>

      </View>
    </KeyboardAvoidingView>
  )
}

AddCard.propTypes = {
  /**
   * User inputs for answer, question
   */
  cardForm: PropTypes.object.isRequired,
  /**
   * A Handler function which control user input, answer
   */
  handleAnswerChange: PropTypes.func.isRequired,
  /**
   * A Handler function which control user input, question
   */
  handleQuestionChange: PropTypes.func.isRequired,
  /**
   * A Handler function which control submit event
   */
  handleSubmit: PropTypes.func.isRequired,
}

export default AddCard
