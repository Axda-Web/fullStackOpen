import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setPersons((prevState) => [...prevState, { name: newName }]);
    setNewName("");
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setNewName(value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons?.map(({ name }, i) => (
        <div key={i}>{name}</div>
      ))}
    </div>
  );
};

export default App;
