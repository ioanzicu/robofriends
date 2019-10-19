import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Card from './Card'

it('expect to render Card component', () => {
  const cardComponent = shallow(<Card />)
  console.log(cardComponent.debug())
  expect(cardComponent.debug()).toMatchSnapshot()
})
