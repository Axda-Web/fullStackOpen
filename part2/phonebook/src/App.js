import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();

    if (persons.find(({ name }) => name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    setPersons((prevState) => [...prevState, { name: newName, number: newNumber }]);
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input type="text" value={newNumber} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons?.map(({ name, number }, i) => (
        <div key={i}>{name} {number}</div>
      ))}
    </div>
  );
};

export default App;
