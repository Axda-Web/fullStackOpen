import React from "react";

import Weather from "./Weather";

const CountryDetails = ({ country }) => {
  return (
    <>
      <h2>{country.name.common}</h2>
      <div>capital {country.capital[0]}</div>
      <div>area {country.area}</div>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map((language, i) => (
          <li key={i}>{language}</li>
        ))}
      </ul>
      <img
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        height="100px"
        width="100px"
      />
      <Weather capitalName={country.capital[0]} />
    </>
  );
};

export default CountryDetails;
