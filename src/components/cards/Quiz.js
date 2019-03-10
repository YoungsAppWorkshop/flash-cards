import PropTypes from 'prop-types'
import React from 'react'
import {
  Animated, Text, TouchableOpacity, TouchableWithoutFeedback, View
} from 'react-native'

import { btn } from '../../styles/btn'
import { align, display, margin } from '../../styles/utils'
import { text } from '../../styles/text'
import { textInput } from '../../styles/textInput'
import { view } from '../../styles/view'



/**
 * Presentational Component which represents a Card in QuizScreen
 */
export default class Quiz extends React.Component {
  static propTypes = {
    /**
     * Card height, width for dynamic rendering
     */
    cardSize: PropTypes.object.isRequired,
    /**
     * A card object which represents the current quiz
     */
    currentCard: PropTypes.object.isRequired,
    /**
     * An Event handler fuction for onPress event
     */
    handlePressCorrectBtn: PropTypes.func.isRequired,
    /**
     * An Event handler fuction for onPress event
     */
    handlePressIncorrectBtn: PropTypes.func.isRequired,
    /**
     * An index number for the current card
     */
    index: PropTypes.number.isRequired,
    /**
     * A deck object which represents the current deck
     */
    selectedDeck: PropTypes.object.isRequired,
  }

  // Define state for rendering animation
  state = {
    animatedValue: new Animated.Value(180),
    buttonDisabled: false,
    isFront: true,
  }

  // Show animation on component mount
  componentDidMount() {
    const { animatedValue } = this.state
    Animated.spring(animatedValue, {
      friction: 8, tension: 10, toValue: 0,
    }).start()
  }

  // Set animation interpolate before component mount
  componentWillMount() {
    const { animatedValue } = this.state

    this.frontInterpolate = animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    })
  }

  // Show animation when user press correct/incorrect button
  componentWillReceiveProps(nextProps) {
    const { animatedValue } = this.state
    const { index } = this.props
    if ( index !== nextProps.index ) {
      this.setState({ isFront: true })
      Animated.sequence([
        Animated.timing(animatedValue, { duration: 0, toValue: 180}),
        Animated.spring(animatedValue, { friction: 8, tension: 10, toValue: 0 })
      ]).start()
    }
  }

  // Disable button temporarily to prevent double tap
  disableButtonTemporarily = () => {
    const { index, selectedDeck } = this.props
    this.setState({ buttonDisabled: true })
    if ( index + 1 < selectedDeck.cardCount ) {
      // Do not enable button for the last quiz
      // (Component will unmount and generate warning)
      setTimeout(() => this.setState({ buttonDisabled: false }), 500)
    }
  }

  // Show flipping card animation
  flipCard() {
    const { animatedValue, isFront } = this.state
    if ( isFront ) {
      this.setState({ isFront: false })
      Animated.spring(animatedValue, {
        friction: 8, tension: 10, toValue: 180,
      }).start()
    } else {
      this.setState({ isFront: true })
      Animated.spring(animatedValue, {
        friction: 8, tension: 10, toValue: 0,
      }).start()
    }
  }

  // When Correct button is tapped,
  onPressCorrectBtn = () => {
    const { handlePressCorrectBtn } = this.props
    this.disableButtonTemporarily()
    handlePressCorrectBtn()
  }

  // When Incorrect button is tapped,
  onPressIncorrectBtn = () => {
    const { handlePressIncorrectBtn } = this.props
    this.disableButtonTemporarily()
    handlePressIncorrectBtn()
  }

  render() {
    const { buttonDisabled, isFront } = this.state
    const { cardSize, currentCard, index, selectedDeck } = this.props
    const frontAnimatedStyle = { transform: [{ rotateY: this.frontInterpolate }] }
    const backAnimatedStyle = { transform: [{ rotateY: this.backInterpolate }] }

    return (
      <View>

        {/* Front side of the Card */}
        <Animated.View style={[
          frontAnimatedStyle,
          view.card, view.cardQuiz,
          { height: cardSize.height, width: cardSize.width }
        ]}>
          <View>
            <Text style={text.cardHeader}>{index + 1} / {selectedDeck.cardCount}</Text>
          </View>

          <View style={align.center}>
            <Text style={text.cardBody}>{currentCard.question}</Text>
            <TouchableWithoutFeedback>
              <View style={btn.flip}>
                <Text style={text.btnFlip} onPress={() => this.flipCard()}>Answer</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={align.center}>
            <TouchableOpacity style={[btn.primary, margin('bottom')(5)]} disabled={buttonDisabled} onPress={this.onPressCorrectBtn}>
              <Text style={text.btn}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btn.secondary} disabled={buttonDisabled} onPress={this.onPressIncorrectBtn}>
              <Text style={text.btn}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* Back side of the Card */}
        <Animated.View style={[
          backAnimatedStyle,
          view.card, view.cardQuiz, view.cardQuizBack,
          { height: cardSize.height, width: cardSize.width },
          isFront && display.none
        ]}>
          <View>
            <Text style={text.cardHeader}>{index + 1} / {selectedDeck.cardCount}</Text>
          </View>

          <View style={align.center}>
            <Text style={text.cardBody}>{currentCard.answer}</Text>
            <TouchableWithoutFeedback>
              <View style={btn.flip}>
                <Text style={text.btnFlip} onPress={() => this.flipCard()}>Question</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={align.center}>
            <TouchableOpacity style={[btn.primary, margin('bottom')(5)]} disabled={buttonDisabled} onPress={this.onPressCorrectBtn}>
              <Text style={text.btn}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btn.secondary} disabled={buttonDisabled} onPress={this.onPressIncorrectBtn}>
              <Text style={text.btn}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

      </View>
    )
  }
}
