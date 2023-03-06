import React from "react";

const Countries = ({ filteredCountries, searchText }) => {
  if (
    !filteredCountries ||
    filteredCountries.length === 0 ||
    searchText.length === 0
  ) {
    return <div>Search for a country</div>;
  }

  if (filteredCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }

  return (
    <>
      {filteredCountries.length === 1 ? (
        <>
          <h2>{filteredCountries[0].name.common}</h2>
          <div>capital {filteredCountries[0].capital[0]}</div>
          <div>area {filteredCountries[0].area}</div>
          <h3>Languages:</h3>
          <ul>
            {Object.values(filteredCountries[0].languages).map(
              (language, i) => (
                <li key={i}>{language}</li>
              )
            )}
          </ul>
          <img
            src={filteredCountries[0].flags.svg}
            alt={`${filteredCountries[0].name.common} flag`}
            height="100px"
            width="100px"
          />
        </>
      ) : (
        filteredCountries.map(({ name: { common } }) => (
          <div key={common}>{common}</div>
        ))
      )}
    </>
  );
};

export default Countries;
