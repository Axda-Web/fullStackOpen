import { useState, useEffect } from "react";
import numberService from "./services/numbers";
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
    numberService.getAll().then((initialNumbers) => {
      setPersons(initialNumbers);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (persons.find(({ name }) => name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    numberService
      .create({
        name: newName,
        number: newNumber,
      })
      .then((returnedNumber) => {
        setPersons((prevState) => [...prevState, returnedNumber]);
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

  const handleDeleteClick = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      numberService.remove(id).then(() => {
        setPersons((prevState) => [
          ...prevState.filter((person) => person.id !== id),
        ]);
      });
    } else {
      return;
    }
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
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default App;
