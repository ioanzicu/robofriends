import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import './index.css'
import * as serviceWorker from './serviceWorker'
import 'tachyons'
import { searchRobotsReducer } from './reducers'
import App from './Containers/App'

const logger = createLogger()
const store = createStore(searchRobotsReducer, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
