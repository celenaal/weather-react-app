import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-6">
              <form id="search-form">
                <input
                  id="place-input"
                  type="text"
                  placeholder="Enter City"
                  autoFocus="on"
                />
                <input className="button w-45" type="Submit" value="Search" />
              </form>
            </div>
            <div className="col-5">
              <form id="current-location">
                <input className="button w-45" type="Submit" value="Current" />
              </form>
            </div>
          </div>
        </div>
        <div className="col-6 City ms-3" id="location">
          {weatherData.city}
        </div>
        <div className="row">
          <div className="col-12 Day">
            <ul>
              <li>
                <span id="currentDate">
                  {" "}
                  <FormattedDate date={weatherData.date} />{" "}
                </span>{" "}
                <span id="currentTime"></span>
              </li>
              <li className="text-capitalize" id="description">
                {weatherData.description}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-2 mr-3">
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="Clear"
              id="icon"
              className="Current float-left"
            />
          </div>
          <div className="col-3 Today">
            <span className="float-left" id="main-tempt">
              {" "}
              {Math.round(weatherData.temperature)}
            </span>{" "}
            <span class="units">°C | °F </span>
          </div>
          <div className="col-3"></div>
          <div className="col-4">
            <ul>
              <li>
                Humidity: <span id="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{weatherData.wind}</span>m/h
              </li>
            </ul>
          </div>
        </div>
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
    );
  } else {
    let apiKey = `9c5166e4799f671ad5f5ea3859d91158`;
    let city = "London";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return "Loading...";
  }
}
