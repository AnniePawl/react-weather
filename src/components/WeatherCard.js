import React from "react";
import WeatherContent from "./WeatherContent";
import DateTime from "./DateTime";
import Form from "./Form";
import "../App.css";

export default function WeatherCard() {
  return (
    <div className="WeatherCard">
      <Form />
      <DateTime />
      <WeatherContent />
    </div>
  );
}
