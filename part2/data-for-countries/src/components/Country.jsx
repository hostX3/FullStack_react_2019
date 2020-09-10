import React from 'react'

const Country = ({ country, weather }) => {
  return (
    <div>
      <h1>
        <span>{country.name}</span>
      </h1>
      <p>
        capital {country.capital}
        <br />
        population {country.population}
      </p>
      <h2>languages</h2>
      <ul>
        {country.languages.map(language => (
          <li key={language.name}>
            {language.name}
            <br />
          </li>
        ))}
      </ul>
      <p>
        <img
          style={{ border: 'solid 1px black' }}
          src={country.flag}
          alt={`Flag of ${country.name}`}
          height='50'
          width='80'
        />
      </p>

      {weather.success === false ? (
        <p>No weather to show</p>
      ) : (
        <div>
          {' '}
          <h2>Weather in {country.capital}</h2>
          <p>
            <b>temperature: </b> {weather['current'].temperature} Celcius
          </p>
          <img
            height='60'
            width='80'
            src={weather['current'].weather_icons[0]}
            alt='weather icon'
          />
          <p>
            <b>wind: </b> {weather['current'].wind_speed} kph direction{' '}
            {weather['current'].wind_dir}
          </p>
        </div>
      )}
    </div>
  )
}

export default Country
