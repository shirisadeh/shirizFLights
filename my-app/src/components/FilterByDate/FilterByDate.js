import "./FilterByDate.css";

const FilterByDate = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onDropDownChange(event.target.value);
  };
  return (
    <div className="flights-filter">
      <div className="flights-filter__control">
        <label>Filter by Date:</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="allFlights"> - </option>
          <option value="2022-01"> Jan.2022</option>
          <option value="2022-02"> Feb.2022</option>
          <option value="2022-03"> Mar.2022</option>
          <option value="2022-04"> Apr.2022</option>
          <option value="2022-05"> May.2022</option>
          <option value="2022-06"> Jun.2022</option>
          <option value="2022-07"> Jul.2022</option>
          <option value="2022-08"> Aug.2022</option>
          <option value="2022-09"> Sep.2022</option>
          <option value="2022-10"> Oct.2022</option>
          <option value="2022-11"> Nov.2022</option>
          <option value="2022-12"> Dec.2022</option>
        </select>
      </div>
    </div>
  );
};

export default FilterByDate;
