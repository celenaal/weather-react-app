import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
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
          <WeatherIcon code={props.data.icon} size={52} />
        </div>
        <div className="col-4 Today float-left">
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
    </div>
  );
}
