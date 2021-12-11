import React, { useState } from "react";
import "./NewFlight.css";
import FlightForm from "./FlightForm";

const NewFlight = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveNewFlightData = (enteredNewFlightData) => {
    //Compute the Max ID for the new added Flight
    let currId =
      1 +
      Math.max.apply(
        Math,
        props.AllFlights.map(function (o) {
          return o.flightId;
        })
      );
    const flightData = {
      flightId: currId,
      ...enteredNewFlightData,
    };

    fetch("http://localhost:8080/api/flights", {
      method: "POST",
      body: JSON.stringify(flightData),
      headers: { "Content-Type": "application/json" },
    });
    stopEditing();
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-flight">
      {!isEditing && (
        <button
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Add New Flight
        </button>
      )}
      {isEditing && (
        <FlightForm
          onSaveNewFlight={saveNewFlightData}
          onCancel={stopEditing}
        />
      )}
    </div>
  );
};

export default NewFlight;
