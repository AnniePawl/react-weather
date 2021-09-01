import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [zip, setZip] = useState("");
  const [data, setData] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const apikey = "0853c15130697cb0030dc6c83d7ae9cd";
  const oneCallPath = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;
  const geocodingPath = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${apikey}`;

  // Get Lat and Long
  async function getLocation() {
    try {
      await axios.get(geocodingPath).then((res) => {
        const data = res.data;
        setLat(data.lat);
        setLon(data.lon);
        console.log(data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Get Weather
  async function getWeather() {
    try {
      await axios.get(oneCallPath).then((res) => {
        const data = res.data;
        setData(data);

        console.log(data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Form 2</h1>

      {data ? <h1>{data.current.temp}</h1> : null}
      <form
        onSubmit={(e) => {
          e.preventDefault(); //prevent page reload
          getLocation();
          getWeather();
        }}
      >
        <input
          type="text"
          placeholder="Enter ZIP"
          value={zip}
          onChange={(e) => {
            setZip(e.target.value);
          }}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}
