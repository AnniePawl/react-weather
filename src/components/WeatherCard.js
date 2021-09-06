import React from "react";
import DateTime from "./DateTime";
import titleCase from "./titleCase";
import "../App.css";

export default function WeatherCard(props) {
  // Title Case
  let formattedDescription = titleCase(props.description);
  return (
    <div className="WeatherCard">
      <h1 className="WeatherCard__city">{props.city}</h1>
      <div className="WeatherCard__dateTime">
        <DateTime />
      </div>
      <div>
        {props.temp !== "" && (
          <h1 className="WeatherCard__temp">{Math.round(props.temp) + "°"}</h1>
        )}

        <h3>{formattedDescription}</h3>
      </div>
    </div>
  );
}
