import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundry'

import { setSearchField } from '../actions'

const App = props => {
  const [robots, setRobots] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users))
  }, [props])

  const { searchField, onSearchChange } = props

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  )

  return (
    <div className='tc'>
      {!robots.length ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 id='title' className='f1'>
            Robo Friends
          </h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
