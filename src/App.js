import React from "react";
import Weather from "./Weather.js";
import Search from "./Search.js";
import Date from "./Date.js";
import Forecast from "./Forecast.js";
import Location from "./Location.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Search />
          <Location />
          <Date />
          <Weather />
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
