import React from "react";

const Search = ({ searchText, handleSearchChange }) => {
  return (
    <div>
      find countries
      <input type="text" value={searchText} onChange={handleSearchChange} />
    </div>
  );
};

export default Search;
