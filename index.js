//importing express from express
const Express = require("express");
const { flightController } = require("./controllers/flightsController");

// init the express app
const app = Express();

const port = 8080;

// parsing the body section of the http request
app.use(Express.json());

// parsing the URL
app.use(Express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("Welcome to Shiriz server");
});

app.get("/api/flights", flightController.getAllFlights);
app.get("/api/flights/:flightId", flightController.getFlightById);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
