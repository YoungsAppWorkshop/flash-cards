import { Constants } from 'expo'
import PropTypes from 'prop-types'
import React from 'react'
import { FlatList, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from '../../actions'
import CardsListFooter from '../../components/cards/CardsListFooter'
import { DECK_LAYOUT } from '../../constants/DeckLayouts'
import { ADD_CARD_SCREEN } from '../../constants/Routes'
import CardContainer from '../cards/CardContainer'
import DeckContainer from '../decks/DeckContainer'
import { flex, padding } from '../../styles/utils'
import { primary, white } from '../../styles/colors'



/**
 * Container Component which represents Cards Screen of the app
 */
class CardsScreen extends React.Component {
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
    title: 'Cards',
    headerTintColor: white,
    headerStyle: {
      backgroundColor: primary,
      marginTop: -Constants.statusBarHeight,
    }
  }

  // Define state to toggle cards list visibility
  state = {
    showCardsList: false
  }

  // When component will unmount, unselect Deck and Cards
  componentWillUnmount() {
    const { actions } = this.props
    actions.unselectDeck()
    actions.unselectCards()
  }

  // On AddCard button pressed,
  navigateToAddCardScreen = () => {
    const { navigation } = this.props
    navigation.navigate(ADD_CARD_SCREEN)
  }

  // On ToggleCardsListButton pressed,
  toggleCardsList = () => {
    this.setState((prevState) => ({
      showCardsList: !prevState.showCardsList
    }))
  }

  render() {
    const { showCardsList } = this.state
    const { navigation, selectedCards, selectedDeck } = this.props

    return (
      <View style={flex.one}>

        <DeckContainer
          deck={selectedDeck}
          layout={DECK_LAYOUT}
          navigation={navigation}
        />

        <FlatList
          data={showCardsList ? selectedCards : []}
          keyExtractor={item => item.id}
          ListFooterComponent={
            <CardsListFooter
              cardCount={selectedDeck.cardCount}
              onPressAddCardBtn={this.navigateToAddCardScreen}
              onPressToggleBtn={this.toggleCardsList}
              showCardsList={showCardsList}
            />
          }
          renderItem={({item}) =>
            <CardContainer card={item} />
          }
          style={padding('top')(20)}
        />

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
)(CardsScreen)
