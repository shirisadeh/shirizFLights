import "./UpdateFlight.css";

const updateFlight = (flightId) => {
  const flightData = {
    flightId: "",
    airplane: "",
    destination: "",
    origin: "",
    departure: new Date(),
    duration: 3,
    cost: "",
  };
  console.log(flightData);
  fetch(`http://localhost:8080/api/flights/` + flightId, {
    method: "PUT",
    body: JSON.stringify(flightData),
    headers: { "Content-Type": "application/json" },
  });
};

const UpdateFlight = (props) => {
  const id = props.flight.flightId;
  return (
    <div>
      <button className="update-button " onClick={() => updateFlight(id)}>
        Update Flight
      </button>
    </div>
  );
};

export default UpdateFlight;
