import React from "react";
import "../App.css";

export default function Title(props) {
  return (
    <div>
      <h1 className="Title">{props.city}</h1>
    </div>
  );
}
