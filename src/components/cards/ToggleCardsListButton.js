import PropTypes from 'prop-types'
import React from 'react'
import { Animated, Platform, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

import { btn } from '../../styles/btn'
import { margin } from '../../styles/utils'
import { text } from '../../styles/text'
import { textInput } from '../../styles/textInput'
import { view } from '../../styles/view'


// Define Button Bodies
const ShowButton = () => (
  <View style={btn.Larger}>
    <Text style={text.btnToggle}>Show All Cards</Text>
    <Text style={[text.btnIcon, margin('bottom')(-10)]}>
      { Platform.OS === 'ios' ?
        <Ionicons name='ios-arrow-down' size={30} /> :
        <MaterialIcons name='arrow-drop-down' size={30} />
      }
    </Text>
  </View>
)

const HideButton = () => (
  <View style={btn.Larger}>
    <Text style={[text.btnIcon, margin('top')(-10)]}>
      { Platform.OS === 'ios' ?
        <Ionicons name='ios-arrow-up' size={30} /> :
        <MaterialIcons name='arrow-drop-up' size={30} />
      }
    </Text>
    <Text style={text.btnToggle}>Hide Cards</Text>
  </View>
)


/**
 * Presentational Component which represents ToggleCardsListButton in Cards screen
 */
class ToggleCardsListButton extends React.Component {
  static propTypes = {
    /**
     * An Event handler fuction for onPress event
     */
    onPressHandler: PropTypes.func.isRequired,
    /**
     * A Flag variable which represents if cards list is visible
     */
    showCardsList: PropTypes.bool.isRequired,
  }

  // Define state for rendering animation
  state = {
    animatedValue: new Animated.Value(3),
    disabled: false,
  }

  // On Press, show animation and toggle CardsList
  onPressButton = () => {
    const { animatedValue } = this.state
    const { onPressHandler } = this.props

    // Disable button to prevent double tap
    this.setState({ disabled: true })
    setTimeout(() => this.setState({ disabled: false }), 500)
    // Show Animation
    Animated.sequence([
      Animated.timing(animatedValue, { duration: 200, toValue: 1 }),
      Animated.timing(animatedValue, { duration: 200, toValue: 3 })
    ]).start(onPressHandler)
  }

  render() {
    const { animatedValue, disabled } = this.state
    const { showCardsList } = this.props
    const animatedStyle = {
      elevation: animatedValue,
      shadowOffset: { width: animatedValue, height: animatedValue },
    }

    return (
      <TouchableWithoutFeedback disabled={disabled} onPress={this.onPressButton}>
        <Animated.View style={[ animatedStyle, btn.toggle ]}>

          { showCardsList ? <HideButton /> : <ShowButton /> }

        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }
}

export default ToggleCardsListButton
