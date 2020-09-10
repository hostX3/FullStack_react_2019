import React from 'react'
import Country from "./Country";

const Countries = ({
  countriesToShow,
  weather,
  handleCapitalChangue,
  setSearchQuery
}) => {
  if (countriesToShow.length === 1) {

    // This was my solution to this issue {Warning: Cannot update a component from inside the function body of a different component.}
      setTimeout(() => {
        handleCapitalChangue(countriesToShow[0].capital)
      }, 0);
   
    return (
      <div>
        <Country country={countriesToShow[0]} weather={weather} />
      </div>
    )
  } else if (countriesToShow.length <= 10) {
    return countriesToShow.map(country => (
      <div key={country.name}>
        <span>{country.name}</span>
        <button
          type='button'
          value={country.name}
          onClick={() => setSearchQuery(country.name)}
        >
          show
        </button>
        <br />
      </div>
    ))
  } else if (countriesToShow.length >= 10) {
    return <div>Too many matches, specify another filter</div>
  }
}



export default Countries
