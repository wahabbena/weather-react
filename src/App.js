import React, { useState } from 'react'
import './App.css'

function App() {

  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("")

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${'1852b806879384d5bc84a124fea8a03d'}`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
          setCity("")
        }
      )
    }
  }

  return (
    <div className="container">
      <input 
        className="input" 
        placeholder="Enter City..." 
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />

      {typeof weatherData.main === 'undefined' ? (
        <div>
          <h1>Welcome to weather app! Enter in a city to get the weather of.</h1>
        </div>
      ): (
        <div className='weather-data'>
          <h3 className='city'>{weatherData.name}</h3>
          <h3 className='temp'>{Math.round(weatherData.main.temp)}°C</h3>
          <h3 className='weather'>{weatherData.weather[0].main}</h3>
        </div>
      )}

      {weatherData.cod === "404" ? (
        <p>City not found.</p>
      ): (
       <>
       </>
      )}


    </div>
  )
}

export default App

