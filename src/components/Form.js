import React, { useState } from "react";
import WeatherContent from "./WeatherContent";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "../App.css";

export default function Form() {
  // Hooks
  const [zip, setZip] = useState("");
  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(0);
  const [iconID, setIconID] = useState(null);
  const [description, setDescription] = useState("");
  const [data, setData] = useState(false);

  console.log(temp);
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
      setData(true);
      setDescription(data2.current.weather[0].description);
      setTemp(data2.current.temp);
      setIconID(data2.current.weather[0].icon);
      console.log(data2.current.weather[0].icon);

      console.log(data2);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div className="Form__container">
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
      </div>

      {/* Conditionally Render Weather Content */}
      {data ? (
        <WeatherContent
          iconID={iconID}
          city={city}
          description={description}
          temp={temp}
        ></WeatherContent>
      ) : null}
    </div>
  );
}
