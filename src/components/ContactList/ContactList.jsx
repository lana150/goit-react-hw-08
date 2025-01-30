import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectContacts } from "../../redux/contactsSelectors";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(state => state.filters.name) ?? "";
  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {contacts?.length > 0 ? (
        <ul className={s.list}>
          {filteredContacts.map(({ id, name, phone }) => (
            <li key={id} className={s.listItem}>
              <p>{name}: {phone}</p>
              <button onClick={() => dispatch(deleteContact(id))} className={s.button}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts found</p>
      )}
    </>
  );
};

export default ContactList;


/*import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectContacts } from "../../redux/contactsSelectors";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p>
            {name}: {number}
          </p>
          <button onClick={() => dispatch(deleteContact(id))} className={s.button}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;*/




/*import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import s from "./ContactList.module.css";
import { FaUser, FaPhone } from "react-icons/fa"; // Іконки

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={s.listItem}>
          <p className={s.contactInfo}>
            <FaUser /> {name}
          </p>
          <p className={s.contactPhone}>
            <FaPhone /> {number}
          </p>
          <button onClick={() => dispatch(deleteContact(id))} className={s.button}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;*/


/*import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectContacts } from "../../redux/contactsSelectors";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, phone }) => (
        <li key={id} className={s.item}>
          <p>
            {name}: {phone}
          </p>
          <button onClick={() => dispatch(deleteContact(id))} className={s.button}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;*/




/*import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts, selectLoading } from "../../redux/contactsSelectors";
import styles from "./ContactList.module.css"; // Імпортуємо модульні стилі

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={styles.contactItem}>
          <span className={styles.contactName}>{name}:</span>
          <span className={styles.contactPhone}>{phone}</span>
          <button
            className={styles.deleteBtn}
            onClick={() => dispatch(deleteContact(id))}
            disabled={loading}
          >
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;*/



/*import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p>
            {name}: {number}
          </p>
          <button onClick={() => dispatch(deleteContact(id))} className={s.button}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;*/