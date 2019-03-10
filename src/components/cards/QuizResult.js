import PropTypes from 'prop-types'
import React from 'react'
import { Animated, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import { btn } from '../../styles/btn'
import { align, margin, width } from '../../styles/utils'
import { text } from '../../styles/text'
import { textInput } from '../../styles/textInput'
import { view } from '../../styles/view'
import {
  clearLocalNotification, formatScore, setLocalNotification
} from '../../utils/helpers'



/**
 * Presentational Component which represents QuizResult in QuizScreen
 */
export default class QuizResult extends React.Component {
  static propTypes = {
    /**
     * Redux Action creators for Local Notification
     */
    actions: PropTypes.object.isRequired,
    /**
     * Card height, width for dynamic rendering
     */
    cardSize: PropTypes.object.isRequired,
    /**
     * Current quiz score
     */
    currentScore: PropTypes.number.isRequired,
    /**
     * Max score for the deck
     */
    maxScore: PropTypes.number.isRequired,
    /**
     * Number of Correct Answers
     */
    numOfCorrect: PropTypes.number.isRequired,
    /**
     * Number of Incorrect Answers
     */
    numOfIncorrect: PropTypes.number.isRequired,
    /**
     * An Event handler fuction for onPress event
     */
    handleGoBack: PropTypes.func.isRequired,
    /**
     * An Event handler fuction for onPress event
     */
    handleRestart: PropTypes.func.isRequired,
  }

  // Define state for rendering animation
  state = {
    animatedValue: new Animated.Value(180),
    buttonDisabled: false,
  }

  // Show animation and reset Notification on component mount
  componentDidMount() {
    const { actions } = this.props

    this.flipCard()
    clearLocalNotification()
    actions.setNotification(setLocalNotification(false))
  }

  // Set animation interpolate before component mount
  componentWillMount() {
    const { animatedValue } = this.state

    this.interpolate = animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
  }

  // Disable button to prevent double tap
  disableButtonTemporarily = isTemporary => {
    this.setState({ buttonDisabled: true })
    if ( isTemporary ) {
      setTimeout(() => this.setState({ buttonDisabled: false }), 500)
    }
  }

  // Show flipping card animation
  flipCard() {
    const { animatedValue } = this.state

    Animated.spring(animatedValue, {
      friction: 8, tension: 10, toValue: 0,
    }).start()
  }

  // When user pressed Go Back button,
  onPressGoBackBtn = () => {
    this.disableButtonTemporarily(true)
    this.props.handleGoBack()
  }

  // When user pressed Restart button,
  onPressRestartBtn = () => {
    this.disableButtonTemporarily(false)
    this.props.handleRestart()
  }

  render() {
    const { buttonDisabled } = this.state
    const { cardSize, currentScore, maxScore, numOfCorrect, numOfIncorrect } = this.props
    const animatedStyle = { transform: [{ rotateY: this.interpolate }] }

    return (
      <View>

        <Animated.View style={[animatedStyle, view.card, view.cardQuiz, { height: cardSize.height, width: cardSize.width }]}>

          <View>
            <Text style={text.cardHeader}>Result:</Text>
          </View>

          <View style={align.center}>

            <Text style={text.quizResultLabel}>Max Score</Text>
            <Text style={text.quizResultScore}>{formatScore(maxScore)}</Text>

            <Text style={[text.quizResultLabel, margin('top')(10)]}>Current Score</Text>
            <Text style={text.quizResultScore}>{formatScore(currentScore)}</Text>

            <View style={view.quizCount}>

              <Text style={[text.quizResultCorrect, margin('right')(15)]}>
                <FontAwesome name='check-circle' size={30} /> &nbsp; {numOfCorrect}
              </Text>

              <Text style={text.quizResultIncorrect}>
                <FontAwesome name='times-circle' size={30} /> &nbsp; {numOfIncorrect}
              </Text>

            </View>

          </View>

          <View style={align.center}>

            <TouchableOpacity style={[btn.primary, width(250), margin('bottom')(5)]} disabled={buttonDisabled} onPress={this.onPressRestartBtn}>
              <Text style={text.btn}>Restart Quiz</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[btn.secondary, width(250)]} disabled={buttonDisabled} onPress={this.onPressGoBackBtn}>
              <Text style={text.btn}>Go Back to Cards List</Text>
            </TouchableOpacity>

          </View>

        </Animated.View>

      </View>
    )
  }
}
