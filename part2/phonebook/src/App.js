import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Form from "./components/Form";
import People from "./components/People";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (persons.find(({ name }) => name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    axios
      .post("http://localhost:3001/persons", {
        name: newName,
        number: newNumber,
      })
      .then((response) => {
        setPersons((prevState) => [...prevState, response.data]);
      });

    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setNewName(value);
  };

  const handleNumChange = (event) => {
    const { value } = event.target;
    setNewNumber(value);
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
    setSearchResults(
      persons.filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Search newName={newName} handleSearchChange={handleSearchChange} />
      <Form
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumChange={handleNumChange}
        newName={newName}
        newNumber={newNumber}
      />
      <People
        persons={persons}
        searchResults={searchResults}
        searchInput={searchInput}
      />
    </div>
  );
};

export default App;
