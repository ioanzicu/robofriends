import React from 'react'

const SearchBox = ({ searchField, searchChange }) => (
  <div className='pb4'>
    <input
      aria-label='Search Robots'
      value={searchField}
      onChange={searchChange}
      className='pa3 ba b--green bg-lightest-blue'
      type='search'
      placeholder='Search Robot'
    />
  </div>
)

export default SearchBox
