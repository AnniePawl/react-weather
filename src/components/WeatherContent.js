import React from "react";
import WeatherIcon from "./WeatherIcon";
import titleCase from "./titleCase";
import "../App.css";

export default function WeatherContent(props) {
  let formattedDescription = titleCase(props.description);
  return (
    <div className="WeatherContent">
      <h1 className="WeatherCard__city">{props.city}</h1>
      {props.iconID && <WeatherIcon iconID={props.iconID} />}
      <div>
        {props.temp > 0 && (
          <h1 className="WeatherCard__temp">{Math.round(props.temp) + "°"}</h1>
        )}
        <h3>{props.description}</h3>
      </div>
    </div>
  );
}
