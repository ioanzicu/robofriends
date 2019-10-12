import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundry'

import { setSearchField, requestRobots } from '../actions'

const App = ({
  searchField,
  onSearchChange,
  robots,
  isPending,
  onRequestRobots
}) => {
  useEffect(() => {
    onRequestRobots()
  }, [onRequestRobots])

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  )

  const title = isPending ? 'Loading...' : 'Robo Friends'

  return (
    <div className='tc'>
      <h1 id='title' className='f1'>
        {title}
      </h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRobotsReducer.searchField,
    robots: state.requestRobotsReducer.robots,
    isPending: state.requestRobotsReducer.isPending,
    error: state.requestRobotsReducer.error
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
