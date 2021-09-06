import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import "../App.css";

export default function Form() {
  // Hooks
  const [zip, setZip] = useState("");
  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");

  // Variables
  const apikey = "0853c15130697cb0030dc6c83d7ae9cd";
  const geocodingPath = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${apikey}`;

  // Get Weather
  async function getWeather() {
    try {
      const res1 = await axios.get(geocodingPath);
      const data = res1.data;
      console.log(data);
      setCity(data.name);
      const res2 = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${data.lat}&lon=${data.lon}&appid=${apikey}&units=imperial`
      );
      const data2 = res2.data;
      // console.log(data2.current.weather[0].main);
      setDescription(data2.current.weather[0].main);
      setTemp(data2.current.temp);
      console.log(data2);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {/* Form  */}
      <form
        onSubmit={(e) => {
          e.preventDefault(); //prevent page reload
          getWeather();
        }}
      >
        <input
          placeholder="Enter ZIP"
          type="text"
          value={zip}
          onChange={(e) => {
            setZip(e.target.value);
          }}
        />
      </form>
      <button type="submit">Enter</button>

      <WeatherCard
        city={city}
        description={description}
        temp={Math.round(temp)}
      ></WeatherCard>
    </div>
  );
}
