import React, { useState } from "react";

import CountryDetails from "./CountryDetails";

const Country = ({ country }) => {
  const [showCountryDetails, setShowCountryDetails] = useState(false);

  const handleShowCountryDetailsClick = () => {
    setShowCountryDetails(!showCountryDetails);
  };

  return (
    <>
      <div>
        {country.name.common}
        <button onClick={handleShowCountryDetailsClick}>{showCountryDetails ? 'hide' : 'show'}</button>
      </div>
      {showCountryDetails && <CountryDetails country={country} />}
    </>
  );
};

export default Country;
