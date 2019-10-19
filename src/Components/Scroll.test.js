import React from 'react'
import { shallow } from 'enzyme'
import Scroll from './Scroll'

it('expect to render Scroll component', () => {
  const scrollComponent = shallow(<Scroll />)
  expect(scrollComponent.debug()).toMatchSnapshot()
})
