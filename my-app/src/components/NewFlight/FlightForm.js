// {
//   flightId: 1,
//   airplane: "737-800",
//   destination: "BKK",
//   origin: "TLV",
//   departure: new Date("2022-01-13T07:00:00+0200"),
//   duration: 6,
//   cost: "$360",
// },
import React, { useState } from "react";
import "./FlightForm.css";

const FlightForm = (props) => {
  //Get From
  const [enteredOrigin, setEnteredOrigin] = useState("");
  const addOrigin = (event) => {
    setEnteredOrigin(event.target.value);
  };

  //Get To
  const [enteredDestination, setEnteredDestination] = useState("");
  const addDestination = (event) => {
    setEnteredDestination(event.target.value);
  };

  //Get Cost
  const [enteredCost, setEnteredCost] = useState("");
  const addCost = (event) => {
    setEnteredCost(event.target.value);
  };

  //Get Date
  const [enteredDate, setEnteredDate] = useState("");
  const addDate = (event) => {
    setEnteredDate(event.target.value);
  };

  //handle submit, it will reload all the page by default, so i will prevent this reload
  const submitHandler = (event) => {
    //Compute the Max ID for the new added Flight
    let currId =
      1 +
      Math.max.apply(
        Math,
        props.flights.map(function (o) {
          return o.flightId;
        })
      );

    const flightData = {
      flightId: currId,
      airplane: "777-300",
      destination: enteredDestination,
      origin: enteredOrigin,
      departure: new Date(enteredDate),
      duration: 3,
      cost: "$" + enteredCost,
    };
    console.log(flightData);
    fetch("http://localhost:8080/api/flights", {
      method: "POST",
      body: JSON.stringify(flightData),
      headers: { "Content-Type": "application/json" },
    });

    setEnteredOrigin("");
    setEnteredDestination("");
    setEnteredCost("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-flight__controls">
        <div className="new-flight__control">
          <label>From:</label>
          <input type="text" value={enteredOrigin} onChange={addOrigin} />
        </div>
        <div className="new-flight__control">
          <label>To:</label>
          <input
            type="text"
            value={enteredDestination}
            onChange={addDestination}
          />
        </div>
        <div className="new-flight__control">
          <label>Cost:</label>
          <input type="text" value={enteredCost} onChange={addCost} />
        </div>
        <div className="new-flight__control">
          <label>Date:</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-01-01"
            value={enteredDate}
            onChange={addDate}
          />
        </div>
      </div>
      <div className="new-flight__actions">
        <button type="submit">Add Flight</button>
      </div>
    </form>
  );
};
export default FlightForm;
