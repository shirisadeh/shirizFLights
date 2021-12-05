import React, { useState } from "react";
import "./FlightRow.css";
import FlightDate from "./FlightDate";
import Card from "../UI/Card";
import DeleteFlight from "../DeleteFlight/DeleteFLight";
import UpdateFLight from "../UpdateFlight/UpdateFlight";

function FlightRow(props) {
  const [flightCost, setFlightCost] = useState(props.flight.cost);
  const updateFlight = () => {
    setFlightCost("$100");
  };

  return (
    <Card className="flight-row">
      <FlightDate date={props.flight.departure} />
      <div className="flight-row__description">
        <h2>From: {props.flight.origin}</h2>
        <h2>To: {props.flight.destination}</h2>
        <div className="flight-row__price">{flightCost}</div>
      </div>
      <UpdateFLight flight={props.flight} />
      <DeleteFlight flightId={props.flight.flightId} />
    </Card>
  );
}

export default FlightRow;
