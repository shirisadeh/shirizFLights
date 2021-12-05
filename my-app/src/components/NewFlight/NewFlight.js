import "./NewFlight.css";
import FlightForm from "./FlightForm";

const NewFlight = (props) => {
  return (
    <div className="new-flight">
      <FlightForm flights={props.AllFlights} />
    </div>
  );
};

export default NewFlight;
