import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from '../../actions'
import Deck from '../../components/decks/Deck'
import DeckEditForm from '../../components/decks/DeckEditForm'
import { CARD_LAYOUT, DECK_LAYOUT } from '../../constants/DeckLayouts'

/**
 * Container Component which represents a Deck
 */
class DeckContainer extends React.Component {
  static propTypes = {
    /**
     * Redux Action creators
     */
    actions: PropTypes.object.isRequired,
    /**
     * A Deck object
     */
    deck: PropTypes.object.isRequired,
    /**
     * A constant which represents a layout for the deck
     */
    layout: PropTypes.string.isRequired,
    /**
     * A navigation object of react-navigation
     */
    navigation: PropTypes.object.isRequired,
  }

  // Define state to toggle edit mode for the deck
  state = {
    editable: false
  }

  // Toggle Edit mode
  toggleEditable = () => {
    this.setState((prevState) => ({
      editable: !prevState.editable
    }))
  }

  render() {
    const { editable } = this.state
    const { actions, deck, layout, navigation } = this.props

    if ( editable ) {
      return (
        <DeckEditForm
          actions={actions}
          deck={deck}
          editable={editable}
          layout={layout}
          toggleEditable={this.toggleEditable}
        />
      )
    } else {
      return (
        <Deck
          actions={actions}
          deck={deck}
          editable={editable}
          layout={layout}
          navigation={navigation}
          onPressMoreBtn={this.toggleEditable}
        />
      )
    }
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(
  null,
  mapDispatchToProps
)(DeckContainer)
