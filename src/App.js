import React, { useState } from 'react'
import CardList from './Components/CardList'
import SearchBox from './Components/SearchBox'
import { robots } from './robots'

const App = () => {
  const [searchField, setSearchField] = useState('')
  const onSearchChange = event => {
    setSearchField(event.target.value)
  }

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  )

  return (
    <div className='tc'>
      <h1>Robo Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  )
}

export default App
