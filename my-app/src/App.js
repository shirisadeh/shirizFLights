import React, { useEffect, useState } from "react";
import "./App.css";
import Flights from "./components/Flights/Flights";
import NewFlight from "./components/NewFlight/NewFlight";

function App() {
  const [flights, setFlights] = useState([]);
  //Send an HTTP request to fetch flights.json (Data)
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/api/flights");
        const data = await response.json();
        const fetched = data.body;
        setFlights(fetched);
      } catch (error) {
        console.log(error.message);
        return [];
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/fjwtscv7xlikpvd08qxd"
          className="App-logo"
          alt="logo"
          width="300"
          height="10"
        />
      </header>
      <h2 className="App-body">
        <NewFlight AllFlights={flights} />
        <Flights AllFlights={flights} />
      </h2>
    </div>
  );
}

export default App;
