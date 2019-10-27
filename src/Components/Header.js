import React, { memo } from 'react'

const Header = memo(props => (
  <h1 id='title' className='f1'>
    {props.title}
  </h1>
))

export default Header
