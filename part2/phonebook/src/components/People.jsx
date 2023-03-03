import React from "react";
import Person from "./Person";

const People = ({ persons, searchResults, searchInput }) => {
  const displayResults = searchInput.length ? searchResults : persons;
  return (
    <div>
      <h2>Numbers</h2>
      {displayResults?.map(({ name, number }, i) => (
        <Person key={i} name={name} number={number} />
      ))}
    </div>
  );
};

export default People;
