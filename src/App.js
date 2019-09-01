import React, { useState, useEffect } from 'react'
import CardList from './Components/CardList'
import SearchBox from './Components/SearchBox'
import Scroll from './Components/Scroll'

// import { robots } from './robots'

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [robots, setRobots] = useState([])

  const onSearchChange = event => {
    setSearchField(event.target.value)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users))
  }, [])

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  )

  return (
    <div className='tc'>
      {robots.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 id='title' className='f1'>
            Robo Friends
          </h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </>
      )}
    </div>
  )
}

export default App
