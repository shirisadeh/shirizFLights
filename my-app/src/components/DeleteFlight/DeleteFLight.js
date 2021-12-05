import "./DeleteFlight.css";
const deleteFlight = async function (flightId) {
  await fetch(`http://localhost:8080/api/flights/` + flightId, {
    method: "DELETE",
  });

  window.location.reload(false);
};

const DeleteFlight = (props) => {
  const id = props.flightId;
  return (
    <div>
      <button className="delete-button" onClick={() => deleteFlight(id)}>
        Cancel Flight No.{id}!
      </button>
    </div>
  );
};

export default DeleteFlight;
