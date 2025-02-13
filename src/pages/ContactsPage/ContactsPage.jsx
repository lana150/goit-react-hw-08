import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Contacts</h2>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;





/*import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations"; 
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Fetching contacts...");
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Contacts</h2>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;*/




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