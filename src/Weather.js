import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiKey = `9c5166e4799f671ad5f5ea3859d91158`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container mt-3 Weather">
        <div className="row">
          <div className="col-6">
            <form id="search-form" onSubmit={handleSubmit}>
              <input
                id="place-input"
                type="text"
                placeholder="Enter City"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <input className="button w-45" type="Submit" value="Search" />
            </form>
          </div>
          <WeatherInfo data={weatherData} />
          <WeatherForecast size={36} coordinates={weatherData.coordinates} />
          <p className="source-code mt-3">
            <a
              href="https://github.com/celenaal/weather-react-app.git"
              target="_blank"
              rel="noreferrer"
            >
              open-source code
            </a>
            -by Celena Alvarado
          </p>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
