import React, { useState, useEffect } from "react";
import countriesService from "./services/countries";

import Search from "./components/Search";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(undefined);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    countriesService.getAll().then((countries) => {
      setCountries(countries);
    });
  }, []);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
    setFilteredCountries(
      countries.filter(({ name: { common } }) =>
        common.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Search searchText={searchText} handleSearchChange={handleSearchChange} />
      <Countries
        countries={countries}
        filteredCountries={filteredCountries}
        searchText={searchText}
      />
    </div>
  );
};

export default App;
