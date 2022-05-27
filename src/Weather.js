import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}C`);
  }
  let apiKey = `9c5166e4799f671ad5f5ea3859d91158`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);
  return <h1>Hello</h1>;
}
