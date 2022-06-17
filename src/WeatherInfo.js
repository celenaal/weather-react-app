import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo container">
      <div className="col-12 City ms-3" id="location">
        {props.data.city}
      </div>
      <div className="row">
        <div className="col-12 Day">
          <ul>
            <li>
              <span id="currentDate">
                {" "}
                <FormattedDate date={props.data.date} />{" "}
              </span>{" "}
              <span id="currentTime"></span>
            </li>
            <li className="text-capitalize" id="description">
              {props.data.description}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-2 mr-3">
          <img
            src={props.data.iconUrl}
            alt="Clear"
            id="icon"
            className="Current float-left"
          />
        </div>
        <div className="col-4 Today">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{props.data.wind}</span>m/h
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
