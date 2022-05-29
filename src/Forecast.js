import React from "react";

export default function Forecast() {
  return (
    <div>
      <div className="row mt-3">
        <div className="col-1"></div>
        <div className="col-2 Days">Sun</div>
        <div className="col-2 Days">Mon</div>
        <div className="col-2 Days">Tue</div>
        <div className="col-2 Days">Wed</div>
        <div className="col-2 Days">Thu</div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-2 Temp">87°F</div>
        <div className="col-2 Temp">85°F</div>
        <div className="col-2 Temp">70°F</div>
        <div className="col-2 Temp">83°F</div>
        <div className="col-2 Temp">72°F</div>
      </div>
      <div className="row">
        <div className="col-1 Picture"></div>
        <div className="col-2 Picture">🌤</div>
        <div className="col-2 Picture">🌤</div>
        <div className="col-2 Picture">🌤</div>
        <div className="col-2 Picture">🌤</div>
        <div className="col-2 Picture">🌥</div>
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
