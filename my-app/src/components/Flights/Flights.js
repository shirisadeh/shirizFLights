import FlightRow from "./FlightRow";
import "./Flights.css";
import Card from "../UI/Card";

function Flights(props) {
  return (
    <Card className="flights">
      {props.AllFlights.map((currFlight) => {
        return <FlightRow flight={currFlight} />;
      })}
    </Card>
  );
}

export default Flights;
