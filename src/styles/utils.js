import { StyleSheet } from 'react-native'

export const align = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  flexStart: {
    alignItems: 'flex-start',
  },
  stretch: {
    alignItems: 'stretch',
  },
})

export const display = StyleSheet.create({
  none: {
    display: 'none',
  },
})

export const flex = StyleSheet.create({
  one: {
    flex: 1,
  },
  two: {
    flex: 2,
  },
  three: {
    flex: 3,
  },
})

export const margin = direction => value => {
  switch(direction) {
    case 'bottom':
      return { marginBottom: value }
    case 'left':
      return { marginLeft: value }
    case 'right':
      return { marginRight: value }
    case 'top':
      return { marginTop: value }
    case 'x':
      return { marginLeft: value, marginRight: value }
    case 'y':
      return { marginBottom: value, marginTop: value }
    default:
      return { margin: value }
  }
}

export const justify = StyleSheet.create({
  flexEnd: {
    justifyContent: 'flex-end',
  },
  flexStart: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
})

export const padding = direction => value => {
  switch(direction) {
    case 'bottom':
      return { paddingBottom: value }
    case 'left':
      return { paddingLeft: value }
    case 'right':
      return { paddingRight: value }
    case 'top':
      return { paddingTop: value }
    case 'x':
      return { paddingLeft: value, paddingRight: value }
    case 'y':
      return { paddingBottom: value, paddingTop: value }
    default:
      return { padding: value }
  }
}

export const width = value => ({ width: value })
