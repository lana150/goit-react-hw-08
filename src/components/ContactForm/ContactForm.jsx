import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import {
  selectContacts,
  selectIsLoading,
} from '../../redux/contacts/selectors';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters'),
  number: Yup.string()
    .required('Phone number is required')
    .matches(/^\d+$/, 'Phone number must contain only digits')
    .min(6, 'Phone number must be at least 6 digits'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values, { resetForm }) => {
    const duplicate = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (duplicate) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={s.form}>
          <label className={s.label}>
            Name
            <Field name="name" type="text" className={s.field} />
            <ErrorMessage name="name" component="div" className={s.error} />
          </label>
          <label className={s.label}>
            Phone Number
            <Field name="number" type="text" className={s.field} />
            <ErrorMessage name="number" component="div" className={s.error} />
          </label>
          <button type="submit" className={s.button} disabled={isLoading}>
            {isLoading ? 'Adding...' : 'Add Contact'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;


/*import { useDispatch, useSelector } from "react-redux"; 
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
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
      alert(`${values.name} is already in contacts!`);
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
      .matches(/^\+?\d{9,15}$/, "Invalid phone number format") 
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
            name="number" 
            id={numberId}
            placeholder="+123456789" 
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

export default ContactForm;*/