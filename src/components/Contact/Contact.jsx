import s from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Contact = ({ contact, deleteContact }) => {
  const { name, number, id } = contact;
  return (
    <>
      <div className={s.container}>
        <div className={s.wrapper}>
          <p>
            <FaUser />
            {name}
          </p>
          <p>
            <FaPhoneAlt />
            {number}
          </p>
        </div>
        <button type="button" onClick={() => deleteContact(id)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;


/*import s from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

const Contact = ({ contact, onDelete }) => {
  const { name, phone, id } = contact; // У твоєму API номер телефону зберігається як `phone`, а не `number`

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <p>
          <FaUser />
          {name}
        </p>
        <p>
          <FaPhoneAlt />
          {phone}
        </p>
      </div>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;*/




