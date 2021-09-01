import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [zip, setZip] = useState("");
  const [data, setData] = useState(null);
  const apikey = "0853c15130697cb0030dc6c83d7ae9cd";
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=imperial`;

  async function getStories() {
    try {
      await axios.get(path).then((res) => {
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
      {data ? <h1>{data.main.temp}</h1> : null}
      <form
        onSubmit={(e) => {
          e.preventDefault(); //prevent page reload
          getStories();
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
