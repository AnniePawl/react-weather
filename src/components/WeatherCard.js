import React from "react";
import DateTime from "./DateTime";
import "../App.css";

export default function WeatherCard(props) {
  return (
    <div className="WeatherCard">
      <h1>{props.city}</h1>
      <h3>{props.description}</h3>
      <h2>{props.temp}°</h2>
      <DateTime />
    </div>
  );
}
