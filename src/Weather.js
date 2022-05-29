import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}C`);
  }
  let apiKey = `9c5166e4799f671ad5f5ea3859d91158`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);
  return (
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
      <div className="col-3 Today">
        <span id="main-tempt"> 68</span> <span class="units">°C </span>
      </div>
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
  );
}
