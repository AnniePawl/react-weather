import React from 'react';
import {useState} from 'react' //React hook

function Form() {
  const [zip, setZip] = useState('')
  console.log(zip)
    return (
      <form>
        <input
        type='text'
        placeholder='Enter ZIP'
        value = {zip}
        onChange = {(e)=>{setZip(e.target.value)}}
        />
        <button type='submit'>Enter</button>
      </form>
      );
}
 
export default Form;