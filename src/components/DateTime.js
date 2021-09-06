// Date instances inherit from Date.prototype

export default function DateTime() {
  let currentDate = new Date();
  let day = currentDate.getDay();
  let date = currentDate.getDate();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();

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

  return (
    <div>
      <h1>
        {days[day]} {months[month]} {date} {year}
      </h1>
    </div>
  );
}
