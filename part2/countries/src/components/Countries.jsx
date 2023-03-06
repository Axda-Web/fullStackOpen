import React from "react";
import Country from "./Country";
import CountryDetails from "./CountryDetails";

const Countries = ({ countries, filteredCountries, searchText }) => {
  if (countries.length === 0) {
    return <div>loading...</div>;
  }

  if (!filteredCountries || searchText.length === 0) {
    return <div>Search for a country</div>;
  }

  if (filteredCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }

  return (
    <>
      {filteredCountries.length === 1 ? (
        <CountryDetails country={filteredCountries[0]} />
      ) : (
        filteredCountries.map((country) => (
          <Country key={country.name.common} country={country} />
        ))
      )}
    </>
  );
};

export default Countries;
