import { FILTER } from "../../constans/filter.constans";
import PropTypes from "prop-types";

export const Filter = ({ setSelectedSortOption }) => {
  const handleOnChange = (evt) => {
    setSelectedSortOption(evt.target.value);
  };
 

  return (
    <div className="wrapper-filter">
      <label htmlFor="sort-select">Filter:</label>
      <select name="sort" id="sort-select" onChange={handleOnChange}>
        {Object.entries(FILTER).map(([id, value]) => (
          <option value={value} key={id}>
            {value}
          </option>
        ))}

        {/* <option value="Show all">Show all</option>
            <option value="Follow">Follow</option>
            <option value="Followings">Followings</option> */}
      </select>
    </div>
  );
};

Filter.propTypes = {
  setSelectedSortOption: PropTypes.func.isRequired,
};
