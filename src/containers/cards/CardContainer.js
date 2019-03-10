import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from '../../actions'
import Card from '../../components/cards/Card'
import CardEditForm from '../../components/cards/CardEditForm'

/**
 * Container Component which represents a Card
 */
class CardContainer extends React.Component {
  static propTypes = {
    /**
     * Redux Action creators
     */
    actions: PropTypes.object.isRequired,
    /**
     * A Card object which stores question and answer
     */
    card: PropTypes.object.isRequired,
  }

  // Define state to toggle edit mode for the card
  state = {
    editable: false
  }

  // Toggle edit mode for the card
  toggleEditable = () => {
    this.setState((prevState) => ({
      editable: !prevState.editable
    }))
  }

  render() {
    const { editable } = this.state
    const { actions, card } = this.props

    if ( editable ) {
      return (
        <CardEditForm
          actions={actions}
          card={card}
          editable={editable}
          toggleEditable={this.toggleEditable}
        />
      )
    } else {
      return (
        <Card
          card={card}
          editable={editable}
          onPressMoreBtn={this.toggleEditable}
        />
      )
    }
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(CardContainer)
