import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'


const App = () => {
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [currentCountryCapital, setCurrentCountryCapital] = useState('')

  const handleSearch = e => {
    setSearchQuery(e.target.value)
  }
  
  const handleCapitalChangue = (countryName) => {
    setCurrentCountryCapital(countryName)
  }
  

  let countriesToShow = searchQuery ? countries.filter(item => {
    return (
      item.name.indexOf(
        searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1)
      ) > -1
    )
  }) : []

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(response.data)
     
      console.log('countries')
    })
  }, [currentCountryCapital])

  useEffect(() => {
    axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY_WEATHER}&query=${currentCountryCapital}`).then(response => {
      setWeather(response.data)
    }).catch((err)=> console.log(err))
  }, [currentCountryCapital])

  // console.log(currentCountryCapital)

  return (
    <div className='App'>
      <label htmlFor='search'>Find a country!! </label>
      <input
        type='text'
        id={'search'}
        onChange={handleSearch}
        value={searchQuery}
      />
      { countriesToShow.length === 0 ? <p>Waiting for your query!</p> : <Countries
        weather={weather}
        countriesToShow={countriesToShow}
        handleCapitalChangue={handleCapitalChangue}
        setSearchQuery={setSearchQuery}
      /> }
      
    </div>
  )
}

export default App
