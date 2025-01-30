import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { selectContacts } from "../../redux/contactsSelectors";
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import { useId } from "react";
import * as Yup from "yup";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, options) => {
    if (contacts.some((contact) => contact.name === values.name)) {
      alert(`${values.name} Is already in contacts!`);
      return;
    }

    dispatch(addContact(values));
    options.resetForm();
  };

  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(9, "Invalid phone number format")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={s.ContactForm}>
        <label className={s.labelForm} htmlFor={nameId}>
          <span className={s.spanForm}>Name</span>
          <Field className={s.inputForm} type="text" name="name" id={nameId} />
          <ErrorMessage className={s.error} name="name" component="span" />
        </label>
        <label className={s.labelForm} htmlFor={numberId}>
          <span className={s.spanForm}>Number</span>
          <Field
            className={s.inputForm}
            type="text"
            name="numder"
            id={numberId}
          />
          <ErrorMessage className={s.error} name="number" component="span" />
        </label>

        <button className={s.btnForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;