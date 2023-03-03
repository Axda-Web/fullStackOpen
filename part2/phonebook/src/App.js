import { useState } from "react";
import Search from "./components/Search";
import Form from "./components/Form";
import People from "./components/People";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [searchResults, setSearchResults] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (persons.find(({ name }) => name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    setPersons((prevState) => [
      ...prevState,
      { name: newName, number: newNumber },
    ]);
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
