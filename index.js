/*
importing express from express
create the express server - require the express library
*/
const Express = require("express");
const { flightsRouter } = require("./routers/flightsRouter");

/*
init the express app - calling this express function to set up the server
*/
const app = Express();
const port = 8080;

/*
middleware - code that run between the starting of the req and the ending of the req
middleware start from top to bottom
parsing the body section of the http request
*/
app.use(Express.json());

/*
parsing the URL
*/
app.use(Express.urlencoded({ extended: true }));

/*
Cors Origin Control - enable the Server to share the data
*/
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.set("Content-Type", "application/json");
  next();
});

app.get("/", (req, res) => {
  res.json("Welcome to Shiriz server");
});

/*
linking the router to this path
*/
app.use("/api/flights", flightsRouter);

/*
listening on port 8080 for request
*/
app.listen(port, () => console.log(`Server is listening on port ${port}`));
