import PropTypes from 'prop-types'
import React from 'react'
import { KeyboardAvoidingView, Text, TextInput, View } from 'react-native'

import { margin, width } from '../../styles/utils'
import { text } from '../../styles/text'
import { textInput } from '../../styles/textInput'
import { view } from '../../styles/view'
import { black, gray, primary, primaryDark, white } from '../../styles/colors'



/**
 * Presentational Component which represents layout of Add Deck screen
 */
const AddDeck = ({ deckColor, handleInputChange, handleSubmit, inputText }) => (
  <KeyboardAvoidingView style={view.container} behavior='padding'>
    <View style={[view.card, view.cardBig, { backgroundColor: deckColor}]}>

      <Text style={text.cardBody}>What is the title</Text>
      <Text style={text.cardBody}>of your new</Text>
      <Text style={text.cardBody}>deck?</Text>

      <TextInput
        blurOnSubmit={true}
        maxLength={15}
        onChangeText={handleInputChange}
        onSubmitEditing={handleSubmit}
        placeholder='Deck Title (up to 15 characters)'
        returnKeyType = {'send'}
        style={[textInput.add, margin('top')(15), width(250)]}
        value={inputText}
      />

    </View>
  </KeyboardAvoidingView>
)

AddDeck.propTypes = {
  /**
   * Deck color(hex)
   */
  deckColor: PropTypes.string.isRequired,
  /**
   * An Event handler fuction for onPress event
   */
  handleInputChange: PropTypes.func.isRequired,
  /**
   * An Event handler fuction for onPress event
   */
  handleSubmit: PropTypes.func.isRequired,
  /**
   * User input string for the Deck title
   */
  inputText: PropTypes.string.isRequired,
}

export default AddDeck
