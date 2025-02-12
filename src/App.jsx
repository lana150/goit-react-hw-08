/*import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/Routes/PrivateRoute";
import RestrictedRoute from "./components/Routes/RestrictedRoute";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RestrictedRoute component={RegisterPage} />} />
        <Route path="login" element={<RestrictedRoute component={LoginPage} />} />
        <Route path="contacts" element={<PrivateRoute component={ContactsPage} />} />
      </Route>
    </Routes>
  );
};

export default App;*/


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactsForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { fetchContacts } from "./redux/contacts/operations";
import { selectLoading, selectError } from "./redux/contacts/selectors";
import "./App.css"; 

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