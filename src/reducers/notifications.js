import * as types from '../constants/ActionTypes'

const initialState = {
  isSet: false,
}

const notifications = (state = initialState, action) => {
  switch (action.type) {
    case types.CLEAR_NOTIFICATION :
      return {
        isSet: false,
      }
    case types.SET_NOTIFICATION :
      return {
        isSet: true,
      }
    default:
      return state
  }
}

export default notifications
