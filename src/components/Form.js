import React, { useState } from "react";
import Title from "./Title";
import axios from "axios";

export default function Form() {
  const [zip, setZip] = useState("");
  const [data, setData] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [name, setName] = useState("Weather");
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
        setName(data.name);
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
      <Title name={name} />
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
