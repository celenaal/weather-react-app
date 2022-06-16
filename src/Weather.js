import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}C`);
  }
  let apiKey = `9c5166e4799f671ad5f5ea3859d91158`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-7">
            <form id="search-form">
              <input id="place-input" type="text" placeholder="Enter City" />
              <input className="button" type="Submit" value="Search" />
            </form>
          </div>
          <div className="col-5">
            <form id="current-location">
              <input className="button" type="Submit" value="Current" />
            </form>
          </div>
        </div>
      </div>
      <div className="col-6 City ms-3" id="location">
        Los Angeles
      </div>
      <div className="row">
        <div className="col-12 Day">
          <ul>
            <li>
              <span id="currentDate"> February 10, 2022 </span>{" "}
              <span id="currentTime"> 8:20 </span>
            </li>
            <li id="description">Clear Sky</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-2 Current">Current</div>
        <div className="col-2">
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="Clear"
            className="float-left"
            id="icon"
          />
        </div>
        <div className="col-2 Today">
          <span id="main-tempt"> 68</span> <span class="units">°C </span>
        </div>
        <div className="col-2"></div>
        <div className="col-4">
          <ul>
            <li>
              Humidity: <span id="humidity">0</span>%
            </li>
            <li>
              Wind: <span id="wind">0</span>m/h
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
}
