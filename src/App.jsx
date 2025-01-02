import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import initialContacts from "./assets/contacts.json";

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("saved-contact")) ?? initialContacts
  );
  const [search, setSearch] = useState("");

  useEffect(
    () => localStorage.setItem("saved-contact", JSON.stringify(contacts)),
    [contacts]
  );

  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  const deleteContact = (contactsId) => {
    setContacts((prev) => prev.filter(({ id }) => id !== contactsId));
  };
  const handleSearchChange = (value) => {
    setSearch(value.trim());
  };

  const findContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContact} />
      <SearchBox onSearch={search} setSearch={handleSearchChange} />
      <ContactList contacts={findContact} deleteContact={deleteContact} />
    </div>
  );
}

export default App;



/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
