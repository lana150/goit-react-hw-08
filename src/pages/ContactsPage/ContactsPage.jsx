import  { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import s from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.contactsPage}>
      <h1 className={s.title}>Your Contacts</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;







/*import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Contacts</h2>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;*/