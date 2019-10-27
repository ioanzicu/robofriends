import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

it('expect to render Header component', () => {
  const headerComponent = shallow(<Header />)
  expect(headerComponent.debug()).toMatchSnapshot()
})
