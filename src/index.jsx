import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store'
import MainApp from './containers/index.container'

// Create a fresh store
const store = configureStore()

render(
  <Provider store={store}>
     <MainApp />
  </Provider>,
  document.getElementById('root')
)
