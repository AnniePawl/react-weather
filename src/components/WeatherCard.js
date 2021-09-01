import React from "react";
import Title from "./Title";
import Form from "./Form";
import "../App.css";

export default function WeatherCard() {
  return (
    <div className="WeatherCard">
      <Title />
      <Form />
    </div>
  );
}
