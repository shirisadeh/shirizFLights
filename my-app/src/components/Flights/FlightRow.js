import React, { useState } from "react";
import "./FlightRow.css";
import FlightDate from "./FlightDate";
import Card from "../UI/Card";

function FlightRow(props) {
  const [flightCost, setFlightCost] = useState(props.flight.cost);
  const updateFlight = () => {
    setFlightCost("$100");
  };

  return (
    <Card className="flight-row">
      <FlightDate date={props.flight.departure} />
      <div className="flight-row__description">
        <h2>From: {props.flight.destination}</h2>
        <h2>To: {props.flight.origin}</h2>
        <div className="flight-row__price">{flightCost}</div>
      </div>
      <button className="button" onClick={updateFlight}>
        Get a discount!
      </button>
    </Card>
  );
}

export default FlightRow;
