// utils/config.js
import { Platform } from 'react-native'
import { primary, primaryLight, white } from '../styles/colors'

export const StackNavigatorConfig = {
  navigationOptions: {
    headerBackTitle: null,
  },
  headerMode: Platform.OS === 'ios' ? 'float' : 'none',
}

export const TabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? primary : white,
    indicatorStyle: {
      backgroundColor: primaryLight,
    },
    style: {
      backgroundColor: Platform.OS === 'ios' ? white : primary,
      height: 56,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowOpacity: 1,
      shadowRadius: 6,
    }
  }
}
