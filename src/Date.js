import React from "react";
import "./date.css";

export default function Date() {
  return (
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
  );
}
