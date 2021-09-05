import React, { useState } from "react";
import Title from "./Title";
import axios from "axios";

export default function Form() {
  // Hooks
  const [zip, setZip] = useState("");
  const [city, setCity] = useState(null);
  // const [lat, setLat] = useState(null);
  // const [lon, setLon] = useState(null);

  // Variables
  const apikey = "0853c15130697cb0030dc6c83d7ae9cd";
  const geocodingPath = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${apikey}`;
  // const oneCallPath = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;

  // Get Weather
  async function getWeather() {
    try {
      const res1 = await axios.get(geocodingPath);
      const data = res1.data;
      setCity(data.name);
      const res2 = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${data.lat}&lon=${data.lon}&appid=${apikey}&units=imperial`
      );
      const data2 = res2.data;
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
          placeholder="Enter Zip"
          type="text"
          value={zip}
          onChange={(e) => {
            setZip(e.target.value);
          }}
        />
      </form>
      <button type="submit">Enter</button>
      {/* <Title city={city} /> */}
    </div>
  );
}
