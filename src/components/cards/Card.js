import PropTypes from 'prop-types'
import React from 'react'
import { Platform, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

import { btn } from '../../styles/btn'
import { margin } from '../../styles/utils'
import { text } from '../../styles/text'
import { textInput } from '../../styles/textInput'
import { view } from '../../styles/view'



/**
 * Presentational Component which represents Layout for a Card
 */
const Card = ({ card, editable, onPressMoreBtn }) => (
  <View style={[view.card, view.cardListItem]}>

    <View style={[view.line, margin('top')(10)]}>
      <View style={view.lineHead}><Text style={text.lineHead}>Q:</Text></View>
      <View style={view.lineBody}><Text style={text.lineBody}>{card.question}</Text></View>
    </View>

    <View style={[view.line, margin('bottom')(10), margin('top')(5)]}>
      <View style={view.lineHead}><Text style={text.lineHead}>A:</Text></View>
      <View style={view.lineBody}><Text style={text.lineBody}>{card.answer}</Text></View>
    </View>

    <View style={view.buttonGroup}>
      <TouchableWithoutFeedback onPress={onPressMoreBtn}>
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

Card.propTypes = {
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
  onPressMoreBtn: PropTypes.func.isRequired,
}

export default Card
