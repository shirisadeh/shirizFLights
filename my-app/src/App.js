import React, { useEffect, useState } from "react";
import "./App.css";
import Flights from "./components/Flights/Flights";
import NewFlight from "./components/NewFlight/NewFlight";

function App() {
  const [flights, setFlights] = useState([]);
  //Send an HTTP request to fetch flights.json (Data)
  useEffect(async () => {
    try {
      const response = await fetch("http://localhost:8080/api/flights");
      const data = await response.json();
      const fetched = data.body;
      setFlights(fetched);
    } catch (error) {
      console.log(error.message);
      return [];
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/fjwtscv7xlikpvd08qxd"
          className="App-logo"
          alt="logo"
          width="300"
          height="100"
        />
        <NewFlight AllFlights={flights} />
        <Flights AllFlights={flights} />
      </header>
    </div>
  );
}

export default App;

// const listOfFlights = [
//   {
//     flightId: 1,
//     airplane: "737-800",
//     destination: "BKK",
//     origin: "TLV",
//     departure: new Date("2022-01-13T07:00:00+0200"),
//     duration: 6,
//     cost: "$360",
//   },
//   {
//     flightId: 2,
//     airplane: "787-900",
//     destination: "JFK",
//     origin: "TLV",
//     departure: new Date("2022-03-22T09:00+0200"),
//     duration: 12,
//     cost: "$700",
//   },
//   {
//     flightId: 3,
//     airplane: "737-800",
//     destination: "FCO",
//     origin: "TLV",
//     departure: new Date("2022-02-05T14:30+0200"),
//     duration: 6,
//     cost: "$120",
//   },
//   {
//     flightId: 4,
//     airplane: "777-300",
//     destination: "MIA",
//     origin: "TLV",
//     departure: new Date("2022-06-05T22:15+0300"),
//     duration: 14,
//     cost: "$590",
//   },
// ];
