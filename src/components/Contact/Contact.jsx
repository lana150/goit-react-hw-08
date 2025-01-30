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



