import PropTypes from 'prop-types'
import React from 'react'
import { View } from 'react-native'

import ToggleCardsListButton from './ToggleCardsListButton'
import AddButton from '../common/AddButton'
import { ADD_CARD_BUTTON } from '../../constants/ButtonTypes'
import { margin } from '../../styles/utils'


/**
 * Presentational Component which represents CardsListFooter on CardsScreen
 */
const CardsListFooter = ({
  cardCount, onPressAddCardBtn, onPressToggleBtn, showCardsList
}) => (

  <View style={margin('bottom')(100)}>

    { cardCount > 0 &&
      <ToggleCardsListButton
        onPressHandler={onPressToggleBtn}
        showCardsList={showCardsList}
      />
    }

    <AddButton
      buttonType={ADD_CARD_BUTTON}
      onPressHandler={onPressAddCardBtn}
    />

  </View>
)

CardsListFooter.propTypes = {
  /**
   * Number of cards for a deck
   */
  cardCount: PropTypes.number.isRequired,
  /**
   * An Event handler fuction for onPress event
   */
  onPressAddCardBtn: PropTypes.func.isRequired,
  /**
   * An Event handler fuction for onPress event
   */
  onPressToggleBtn: PropTypes.func.isRequired,
  /**
   * A Flag variable which represents if cards list is visible
   */
  showCardsList: PropTypes.bool.isRequired,
}

export default CardsListFooter
