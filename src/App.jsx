import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactsForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { fetchContacts } from "./redux/contactsOps";
import { selectLoading, selectError } from "./redux/contactsSelectors";
import "./App.css"; // Стилі залишаємо без змін

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList />
    </div>
  );
};

export default App;




/*import ContactsForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;*/