/*
Exported functions:
    createFlight,
    updateFlight,
    getAllFlights,
    getFlightById,
    deleteFlight,
*/

const DB = require("../data/index.js");
// req is the object that express create, that represent the request of the user

exports.flightController = {
  addNewFlight: (req, res) => {
    try {
      DB.createFlight(req.body);
      res.status(200).json({ status: "Success", message: "flight created!" });
    } catch (err) {
      res.status(400).json({ status: "Fail", message: err.message });
    }
  },
  updateFlight: (req, res) => {
    try {
      DB.updateFlight(req.body);
      res.status(200).json({ status: "Success", message: "flight updated!" });
    } catch (err) {
      res.status(400).json({ status: "Fail", message: err.message });
    }
  },
  getAllFlights: (req, res) => {
    try {
      const data = DB.getAllFlights(req.body);
      res.status(200).json({ status: "Success", body: data });
    } catch (err) {
      res.status(400).json({ status: "Fail", message: err.message });
    }
  },
  getFlightById: (req, res) => {
    try {
      const data = DB.getFlightById(req.params.flightId);
      console.log(req.params.flightId);
      res.status(200).json({ status: "Success", body: data });
    } catch (err) {
      res.status(400).json({ status: "Fail", message: err.message });
    }
  },
  deleteFLight: (req, res) => {
    try {
      DB.deleteFLight(req.body);
      res.status(200).json({ status: "Success", message: "flight deleted!" });
    } catch (err) {
      res.status(400).json({ status: "Fail", message: err.message });
    }
  },
};
