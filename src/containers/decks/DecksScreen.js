import { Constants } from 'expo'
import PropTypes from 'prop-types'
import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from '../../actions'
import AddButton from '../../components/common/AddButton'
import { ADD_DECK_BUTTON } from '../../constants/ButtonTypes'
import { CARD_LAYOUT } from '../../constants/DeckLayouts'
import { ADD_DECK_SCREEN } from '../../constants/Routes'
import DeckContainer from './DeckContainer'
import { primary, white } from '../../styles/colors'
import { padding } from '../../styles/utils'
import { setLocalNotification } from '../../utils/helpers'



/**
 * Container Component which represents Decks screen
 */
class DecksScreen extends React.Component {
  static propTypes = {
    /**
     * Redux Action creators
     */
    actions: PropTypes.object.isRequired,
    /**
     * An array which stores all decks in the app
     */
    decks: PropTypes.array.isRequired,
    /**
     * A Flag variable which represents if the LocalNotification is set
     */
    isNotificationSet: PropTypes.bool.isRequired,
    /**
     * A navigation object of react-navigation
     */
    navigation: PropTypes.object.isRequired,
  }

  // Set LocalNotification on componentDidMount
  componentDidMount() {
    const { actions, isNotificationSet } = this.props
    actions.setNotification(
      setLocalNotification(isNotificationSet)
    )
  }

  // Navigate to Add Deck Screen when AddButton pressed
  navigateToAddDeckScreen = () => {
    const { navigation } = this.props
    navigation.navigate(ADD_DECK_SCREEN)
  }

  render() {
    const { decks, navigation } = this.props

    return (
      <FlatList
        data={decks}
        keyExtractor={item => item.id}
        ListFooterComponent={
          <AddButton
            buttonType={ADD_DECK_BUTTON}
            onPressHandler={this.navigateToAddDeckScreen}/>
        }
        renderItem={({item}) => (
          <DeckContainer deck={item} layout={CARD_LAYOUT} navigation={navigation}/>
        )}
        style={padding('top')(10)}
      />
    )
  }
}

const mapStateToProps = state => ({
  decks: Object.values(state.decks.items),
  isNotificationSet: state.notifications.isSet,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DecksScreen)
