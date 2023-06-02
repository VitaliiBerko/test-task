import { FILTER } from "../../constans/filter.constans";
import styles from "./Filter.module.scss"
import PropTypes from "prop-types";

export const Filter = ({ setSelectedSortOption }) => {
  const handleOnChange = (evt) => {
    setSelectedSortOption(evt.target.value);
  };
 

  return (
    <div className={styles.wrapper}>
      <label htmlFor="sort-select">Filter:</label>
      <select name="sort" id="sort-select" onChange={handleOnChange}>
        {Object.entries(FILTER).map(([id, value]) => (
          <option value={value} key={id}>
            {value}
          </option>
        ))}
        
      </select>
    </div>
  );
};

Filter.propTypes = {
  setSelectedSortOption: PropTypes.func.isRequired,
};
