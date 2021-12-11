import React, { useState } from "react";

import "./Flights.css";
import Card from "../UI/Card";
import FilterByDate from "../FilterByDate/FilterByDate";
import FlightList from "./FlightsList/FlightList";

function Flights(props) {
  let flightsToDisplay = props.AllFlights;

  const [filteredDate, setFilteredDate] = useState(`-`);

  const flightToDisplay = (selectedDate) => {
    setFilteredDate(selectedDate);
  };
  flightsToDisplay = flightsToDisplay.filter((currFlight) => {
    const currDate = currFlight.departure.split(`-`).slice(0, 2).join(`-`);
    if (filteredDate == `-`) return props.AllFlights;
    return currDate == filteredDate;
  });

  return (
    <div>
      <Card className="flights">
        <FilterByDate
          selected={filteredDate}
          onDropDownChange={flightToDisplay}
        />
        <FlightList selected={filteredDate} listToDisplay={flightsToDisplay} />
      </Card>
    </div>
  );
}

export default Flights;
