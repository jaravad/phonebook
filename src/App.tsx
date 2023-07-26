import * as React from 'react';
import axios from 'axios'
import './style.css';
import Persons from './components/Persons';
import Filter from './components/Filter';
import { PersonType } from './types';

const normalizeString = (str: string) => {
  return str.trim().replace(/ +/, ' ').toLowerCase();
};

const App = () => {
  const [persons, setPersons] = React.useState([] as Array<PersonType>);
  const [newName, setNewName] = React.useState('');
  const [newNumber, setNewNumber] = React.useState('');
  const [filter, setFilter] = React.useState('');

  React.useEffect(()=>{
    axios.get('http://localhost:3001/persons')
    .then((res) => {
      setPersons(res.data)
    })
  }, [])

  const handleInputChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setNewName(target.value);
  };

  const handleNumberChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setNewNumber(target.value);
  };

  const handleFilterChange = React.useCallback((e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setFilter(target.value);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newName.length === 0 || newNumber.length === 0) return null;
    const person = persons.find(
      (p) => normalizeString(p.name) === normalizeString(newName)
    );
    if (person) {
      alert(`${newName} is already added to phonebook`);
      return null;
    }
    const newId = Math.max(...persons.map((p) => p.id)) + 1;
    setPersons(persons.concat({ name: newName, number: newNumber, id: newId }));
    setNewName('');
    setNewNumber('');
  };

  const personsToShow = persons.filter((p) => {
    return normalizeString(p.name).includes(normalizeString(filter));
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter changeHandler={handleFilterChange} filterText={filter} />
      <h2>Add a new</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;
