import { FaUser, FaPhoneAlt } from "react-icons/fa"; 
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors"; // Використовуємо правильний селектор
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts); // Використовуємо відфільтровані контакти
  const dispatch = useDispatch();

  return (
    <>
      {contacts.length > 0 ? (
        <ul className={s.list}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.listItem}>
              <div className={s.wrapper}>
                <p><FaUser /> {name}</p>
                <p><FaPhoneAlt /> {number}</p>
              </div>
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