import React from "react";
import "./search.css";

export default function Search() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-8">
          <form id="search-form">
            <input id="place-input" type="text" placeholder="Enter City" />
            <input className="button" type="Submit" value="Search" />
          </form>
        </div>
        <div className="col-4">
          <form id="current-location">
            <input className="button" type="Submit" value="Current" />
          </form>
        </div>
      </div>
    </div>
  );
}
