//importing express from express
const Express = require("express");

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

app.listen(port, () => console.log(`Server is listeing on port ${port}`));
