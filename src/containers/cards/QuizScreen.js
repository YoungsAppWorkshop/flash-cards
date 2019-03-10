import { Constants } from 'expo'
import PropTypes from 'prop-types'
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from '../../actions'
import Quiz from '../../components/cards/Quiz'
import AddButton from '../../components/common/AddButton'
import QuizResult from '../../components/cards/QuizResult'
import { ADD_CARD_BUTTON } from '../../constants/ButtonTypes'
import { ADD_CARD_SCREEN, CARDS_SCREEN } from '../../constants/Routes'
import { primary, white } from '../../styles/colors'
import { justify, padding } from '../../styles/utils'
import { view } from '../../styles/view'
import { selectCards, shuffleCards } from '../../utils/helpers'



/**
 * Container Component which represents Quiz screen
 */
class QuizScreen extends React.Component {
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
     * An array which stores all cards for the selected deck
     */
    selectedCards: PropTypes.array.isRequired,
    /**
     * A Deck object which represents the selected Deck
     */
    selectedDeck: PropTypes.object.isRequired,
  }

  // Define StackNavigator options for the screen
  static navigationOptions = {
    title: 'Quiz',
    headerTintColor: white,
    headerStyle: {
      backgroundColor: primary,
      marginTop: -Constants.statusBarHeight,
    }
  }

  // Define state to control quiz
  state = {
    cardSize: { height: 0, width: 0 },
    index: 0,
    numOfCorrect: 0,
    numOfIncorrect: 0,
    score: 0,
    shuffledCards: []
  }

  // When component mounted, shuffle cards to randomize quiz order
  componentDidMount() {
    this.shuffle()
  }

  // When a new card is added, restart quiz
  componentDidUpdate(prevProps, prevState) {
    const { selectedCards } = this.props
    if ( selectedCards.length !== prevProps.selectedCards.length ) {
      this.restartQuiz()
    }
  }

  // Calculate Score when user pressed correct button
  calculateScore = () => {
    const { numOfCorrect } = this.state
    const { selectedDeck } = this.props
    const score = numOfCorrect / selectedDeck.cardCount
    this.setState({ score }, this.updateMaxScoreIfNecessary)
  }

  // When user pressed correct button, count numOfCorrect and call back calculateScore()
  handlePressCorrectBtn = () => {
    this.setState((prevState) => ({
      index: ++prevState.index,
      numOfCorrect: ++prevState.numOfCorrect,
    }), this.calculateScore)
  }

  // When user pressed incorrect button, count numOfIncorrect
  handlePressIncorrectBtn = () => {
    this.setState((prevState) => ({
      index: ++prevState.index,
      numOfIncorrect: ++prevState.numOfIncorrect
    }))
  }

  // Initialize quiz to prepare restarting quiz
  initializeQuiz = () => {
    this.setState({
      index: 0, numOfCorrect: 0, numOfIncorrect: 0,
      score: 0, shuffledCards: []
    })
  }

  // Measure card size for rendering
  measureCardSize = (event) => {
    this.setState({
      cardSize: {
        height: event.nativeEvent.layout.height - 20,
        width: event.nativeEvent.layout.width - 20,
      }
    })
  }

  // On AddCard button pressed,
  navigateToAddCardScreen = () => {
    const { navigation } = this.props
    navigation.navigate(ADD_CARD_SCREEN)
  }

  // Navigate to CardsScreen when user pressed go back button
  navigateToCardsScreen = () => {
    const { navigation } = this.props
    navigation.navigate(CARDS_SCREEN)
  }

  // Restart the quiz when user pressed restart button
  restartQuiz = () => {
    this.initializeQuiz()
    this.shuffle()
  }

  // Shuffle cards to randomize quiz order
  shuffle = () => {
    const { selectedCards } = this.props
    this.setState({ shuffledCards: shuffleCards(selectedCards) })
  }

  // If user got a new record, update maxScore for the deck
  updateMaxScoreIfNecessary = () => {
    const { score } = this.state
    const { actions, selectedDeck } = this.props

    if ( score > selectedDeck.maxScore ) {
      const payload = { id: selectedDeck.id, score }
      actions.updateMaxScore(payload)
    }
  }

  render() {
    const { cardSize, index, numOfCorrect, numOfIncorrect, shuffledCards, score } = this.state
    const { actions, selectedDeck } = this.props
    const currentCard = shuffledCards[index]

    return (
      <View style={[view.container, justify.center, padding()(0)]} onLayout={(e) => this.measureCardSize(e)}>

        { selectedDeck.cardCount === 0 &&
          <AddButton
            buttonType={ADD_CARD_BUTTON}
            onPressHandler={this.navigateToAddCardScreen}
          />
        }

        { selectedDeck.cardCount > 0 && currentCard &&
          <Quiz
            cardSize={cardSize}
            currentCard={currentCard}
            index={index}
            handlePressCorrectBtn={this.handlePressCorrectBtn}
            handlePressIncorrectBtn={this.handlePressIncorrectBtn}
            selectedDeck={selectedDeck}
          />
        }

        { selectedDeck.cardCount > 0 && index >= selectedDeck.cardCount &&
          <QuizResult
            actions={actions}
            cardSize={cardSize}
            currentScore={score}
            maxScore={selectedDeck.maxScore}
            numOfCorrect={numOfCorrect}
            numOfIncorrect={numOfIncorrect}
            handleGoBack={this.navigateToCardsScreen}
            handleRestart={this.restartQuiz}
          />
        }

      </View>
    )
  }
}

const mapStateToProps = state => ({
  selectedCards: Object.values(state.cards.selectedCards),
  selectedDeck: state.decks.items[state.decks.selectedDeckId],
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizScreen)
