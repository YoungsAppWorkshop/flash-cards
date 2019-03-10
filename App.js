import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

import RootComponent from './src/components/RootComponent'
import configureStore from './src/store/configureStore'

let { store, persistor } = configureStore()

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RootComponent />
    </PersistGate>
  </Provider>
)

export default App
