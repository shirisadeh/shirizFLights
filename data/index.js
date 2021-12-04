const flights = require("./flights.json");

function isFlightValid(flight) {
  return true;
}

//create flight
function createFlight(flight) {
  if (isFlightValid(flight)) {
    flights.push(flight);
  } else {
    throw new Error("Invalid Flight!");
  }
}

// update flight
function updateFlight(flight) {
  const index = flights[_getFlightIndexById(flight.flightId)];
}

//read all flights
function getAllFlights() {
  return flights;
}

//read single flight
function getFlightById(id) {
  return flights[_getFlightIndexById(id)];
}

// delete flight
function deleteFlight(flight) {
  flights.splice(_getFlightIndexById(flight.flightId), 1);
}

//search flight by ID
function _getFlightIndexById(id) {
  let index = flights.findIndex((f) => f.flightId == id);
  if (index > -1) {
    return index;
  } else {
    throw new Error("FLight not found!");
  }
}

module.exports = {
  createFlight,
  updateFlight,
  getAllFlights,
  getFlightById,
  deleteFlight,
};

/*
deleteFlight({
  flightId: 1,
  airplane: "777-300",
  destination: "MIA",
  origin: "TLV",
  departure: "2022-06-05T22:15+0300",
  duration: 18,
});
console.log(getAllFlights());

*/
