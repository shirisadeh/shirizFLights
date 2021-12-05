import "./FLightDate.css";

function FlightDate(props) {
  const currDate = new Date(props.date);
  console.log(currDate);

  const month = currDate.toLocaleString("en-US", {
    month: "long",
  });
  const day = currDate.toLocaleString("en-US", {
    day: "2-digit",
  });
  const year = currDate.getFullYear();

  return (
    <div className="flight-date">
      <div className="flight-date__month">{month}</div>
      <div className="flight-date__year">{year}</div>
      <div className="flight-date__day">{day}</div>
    </div>
  );
}

export default FlightDate;
