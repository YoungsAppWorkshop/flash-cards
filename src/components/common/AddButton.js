import PropTypes from 'prop-types'
import React from 'react'
import { Platform, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import { ADD_CARD_BUTTON, ADD_DECK_BUTTON } from '../../constants/ButtonTypes'
import { btn } from '../../styles/btn'
import { align, margin } from '../../styles/utils'
import { text } from '../../styles/text'
import { gray } from '../../styles/colors'

// Button Texts for each button types
const buttonText ={
  [ADD_CARD_BUTTON]: 'Add a New Card',
  [ADD_DECK_BUTTON]: 'Add a New Deck',
}

// Button Icons for each Platform(Android/iOS)
const ButtonIcon = () => (
  <Text>
    { Platform.OS === 'ios' ?
      <Ionicons name='ios-add-circle' size={40} color={gray} /> :
      <MaterialCommunityIcons name='plus-circle' size={40} color={gray} />
    }
  </Text>
)



/**
 * Presentational Component which represents AddButton on DecksScreen
 */
const AddButton = ({ onPressHandler, buttonType }) => (
  <View style={btn.add}>

    <TouchableWithoutFeedback onPress={onPressHandler}>
      <View style={align.center}>
        <Text style={[text.btnAdd, margin('bottom')(10)]}>{buttonText[buttonType]}</Text>
        <ButtonIcon />
      </View>
    </TouchableWithoutFeedback>

  </View>
)

AddButton.propTypes = {
  /**
   * An Event handler fuction for onPress event
   */
  onPressHandler: PropTypes.func.isRequired,
  /**
   * A constant which represents type of button
   */
  buttonType: PropTypes.string.isRequired,
}

export default AddButton
