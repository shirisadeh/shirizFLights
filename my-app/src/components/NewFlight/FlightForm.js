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

const FlightForm = () => {
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
    event.preventDefault();
    const flightData = {
      flightId: "",
      airplane: "",
      destination: enteredDestination,
      origin: enteredOrigin,
      departure: new Date(enteredDate),
      duration: "",
      cost: enteredCost,
    };
    console.log(flightData);
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
