import React from 'react'
import { connect } from 'react-redux'
import MainPage from '../Components/MainPage'

import { setSearchField, requestRobots } from '../actions'

const App = props => <MainPage {...props} />

const mapStateToProps = ({ searchRobotsReducer, requestRobotsReducer }) => {
  return {
    searchField: searchRobotsReducer.searchField,
    robots: requestRobotsReducer.robots,
    isPending: requestRobotsReducer.isPending,
    error: requestRobotsReducer.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
