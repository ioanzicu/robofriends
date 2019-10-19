import React, { useEffect } from 'react'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundry'
import { MemoizedHeader } from '../Components/Header'

const MainPage = ({
  searchField,
  onSearchChange,
  robots,
  isPending,
  onRequestRobots
}) => {
  useEffect(() => {
    onRequestRobots()
  }, [onRequestRobots])

  const filterRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  )

  const title = isPending ? 'Loading...' : 'Robo Friends'

  return (
    <div className='tc'>
      <MemoizedHeader title={title} />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filterRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  )
}

export default MainPage
