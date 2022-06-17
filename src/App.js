import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Weather defaultCity="Los Angeles"/>
        </div>
      </div>
    </div>
  );
}

export default App;
