import React from "react";

export default function WeatherIcon(props) {
  // Variables
  let iconID = props.iconID;
  let iconURL = `http://openweathermap.org/img/wn/${iconID}@4x.png`;

  return (
    <div>
      <img src={iconURL} alt="weather icon" />
    </div>
  );
}
