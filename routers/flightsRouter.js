/*
Exported functions:
    createFlight,
    updateFlight,
    getAllFlights,
    getFlightById,
    deleteFlight,
*/

const { Router } = require("express");
const { flightsController } = require("../controllers/flightsController");

const flightsRouter = new Router();

flightsRouter.get("/", flightsController.getAllFlights);
flightsRouter.get("/:flightId", flightsController.getFlightById);
flightsRouter.post("/", flightsController.addNewFlight);
flightsRouter.put("/", flightsController.updateFlight);
flightsRouter.delete("/:flightId", flightsController.deleteFlight);

module.exports = {
  flightsRouter,
};
