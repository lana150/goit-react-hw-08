import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, options) => {
    dispatch(
      addContact({
        ...values,
        id: nanoid(),
      })
    );

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
            name="number"
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