import React from 'react';
import PropTypes from 'prop-types';

const FilterContacts = ({filter, onFilter }) => {

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilter}
      ></input>
    </>
  );
};

FilterContacts.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default FilterContacts;