import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import "../../assets/contacts.json";

const ContactList = ({ contacts = [], deleteContact }) => {
  return (
    <>
      <ul className={s.list}>
        {contacts.map((contact) => (
          <li className={s.listItem} key={contact.id}>
            <Contact contact={contact} deleteContact={deleteContact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;