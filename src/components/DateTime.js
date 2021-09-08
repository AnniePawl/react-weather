// Date instances inherit from Date.prototype
import React, { useState, useEffect } from "react";

export default function DateTime() {
  // Variables
  let currentDate = new Date();
  let day = currentDate.getDay();
  let date = currentDate.getDate();
  let month = currentDate.getMonth();
  // let hour = currentDate.getHours();
  // let minutes = currentDate.getMinutes();
  // let year = currentDate.getFullYear();
  // Hooks
  const [AMPM, setAMPM] = useState("AM");
  // const [backgroundClass, setBackgroundClass] = useState("");

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
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Format Time Functions
  // function formatHour(hour) {
  //   if (hour > 12) {
  //     setAMPM("PM");
  //     return hour - 12;
  //   } else {
  //     return hour;
  //   }
  // }
  // let formattedHour = formatHour(hour);

  // function formatMinutes(minutes) {
  //   if (minutes < 10) {
  //     return minutes + "0";
  //   } else {
  //     return minutes;
  //   }
  // }
  // let formattedMinutes = formatMinutes(minutes);

  return (
    <div>
      <h2 className="DateTime__date">
        {days[day].toUpperCase()} | {months[month].toUpperCase()} {date}
        {/* {formattedHour}:{formattedMinutes} {AMPM} */}
      </h2>
      {/* <h2>
        {formattedHour}:{formattedMinutes} {AMPM}
      </h2> */}
    </div>
  );
}
