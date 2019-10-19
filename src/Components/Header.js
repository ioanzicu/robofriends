import React, { memo } from 'react'

const Header = ({ title }) => {
  return (
    <h1 id='title' className='f1'>
      {title}
    </h1>
  )
}

const headerPropsAreEqual = (prevProps, nextProps) =>
  prevProps.title === nextProps.title

export const MemoizedHeader = memo(Header, headerPropsAreEqual)
