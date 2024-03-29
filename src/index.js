import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import './index.css'
import * as serviceWorker from './serviceWorker'
import 'tachyons'
import { searchRobotsReducer, requestRobotsReducer } from './reducers'
import App from './Containers/App'

const logger = createLogger()
const rootReducer = combineReducers({
  searchRobotsReducer,
  requestRobotsReducer
})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register()
