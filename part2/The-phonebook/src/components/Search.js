import React from 'react'

const Search = (props) => {
    return (
        <>
        <div className="search">
            Search name <input onChange={props.onSearch} />
        </div>
       </>
    )
}

export default Search
