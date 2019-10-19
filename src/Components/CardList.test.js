import React from 'react'
import { shallow } from 'enzyme'
import CardList from './CardList'

it('expect to render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Altor',
      username: 'Bino Altor',
      email: 'binoaltor@gmail.com'
    }
  ]
  const cardListComponent = shallow(<CardList robots={mockRobots} />)
  expect(cardListComponent.debug()).toMatchSnapshot()
})
