import ContactForm from "../../components/ContactForm/ContactForm";
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

export default ContactsPage;
