// Date instances inherit from Date.prototype
import React, { useState } from "react";

export default function DateTime() {
  // Variables
  let currentDate = new Date();
  let day = currentDate.getDay();
  let date = currentDate.getDate();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();
  let hour = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  // Hooks
  const [AMPM, setAMPM] = useState("AM");

  // Days of Week
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Months
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Format Time Functions
  function formatHour(hour) {
    if (hour > 12) {
      setAMPM("PM");
      return hour - 12;
    } else {
      return hour;
    }
  }
  let formattedHour = formatHour(hour);

  function formatMinutes(minutes) {
    if (minutes < 10) {
      return minutes + "0";
    } else {
      return minutes;
    }
  }
  let formattedMinutes = formatMinutes(minutes);

  return (
    <div>
      <h2>
        {formattedHour}:{formattedMinutes} {AMPM}
      </h2>
      <p>
        {days[day].toUpperCase()} {months[month].toUpperCase()} {date} {year}
      </p>
    </div>
  );
}
