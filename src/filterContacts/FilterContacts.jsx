import React from "react";

const FilterContacts = ({filter, onChange}) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      ></input>
    </>
  );
};

export default FilterContacts;