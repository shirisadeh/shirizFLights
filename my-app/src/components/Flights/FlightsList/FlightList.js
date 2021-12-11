import FlightRow from "../FlightRow";
import "./FlightList.css";

const FlightList = (props) => {
  if (props.listToDisplay.length == 0) {
    return (
      <h2 className="flight-list__fallback">
        Sorry! No scheduled Flights on {props.selected}
      </h2>
    );
  }

  return (
    <ul className="flight-list">
      {props.listToDisplay.map((currFlight) => (
        <FlightRow key={currFlight.flightId} flight={currFlight} />
      ))}
    </ul>
  );
};
export default FlightList;
