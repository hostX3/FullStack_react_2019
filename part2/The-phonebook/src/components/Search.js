import React from 'react'

const Search = props => {
  return (
    <>
      <div className='search'>
        <label htmlFor={'search-term'}>Search name:</label>
        <input id={'search-term'} onChange={props.onSearch} />
      </div>
    </>
  )
}

export default Search
