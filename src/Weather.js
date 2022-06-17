import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
            <WeatherInfo data={weatherData} />
          </div>
          <div className="col-5">
            <form id="current-location">
              <input className="button w-45" type="Submit" value="Current" />
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
