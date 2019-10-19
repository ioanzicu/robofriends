import React from 'react'
import { shallow } from 'enzyme'
import { MemoizedHeader } from './Header'

it('expect to render Header component', () => {
  const headerComponent = shallow(<MemoizedHeader />)
  expect(headerComponent.debug()).toMatchSnapshot()
})
