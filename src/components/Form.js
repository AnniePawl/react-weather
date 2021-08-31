import React from 'react';
import {useState} from 'react' //react hook

function Form() {
  const [zip, setZip] = useState('')
  const [data, setData] = useState('')

  // get weather data from api 
  async function getWeather(){
    try{
      const apikey = '0853c15130697cb0030dc6c83d7ae9cd'
      const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=imperial`
      const res = await fetch(path)
      const json = await res.json()
      setData(json)
      console.log(json)
    }
    catch(err){
      console.log(err.message)

    }
  }

  console.log(zip)
    return (
      <div>
        <div>
          {data ? <h1>{data.main.temp}</h1>: null}
        </div>
      <form onSubmit={(e)=>{
        e.preventDefault() //prevents page refresh
        getWeather() //get data from api
      }}>
        <input
        type='text'
        placeholder='Enter ZIP'
        value = {zip}
        onChange = {(e)=>{setZip(e.target.value)}}
        />
        <button type='submit'>Enter</button>
      </form>
      </div>
      );
}
 
export default Form;