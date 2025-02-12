/*import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Too short!").required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().min(6, "Too short!").required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field className={styles.input} type="text" name="name" />
          <ErrorMessage className={styles.error} name="name" component="div" />
        </label>

        <label className={styles.label}>
          Email
          <Field className={styles.input} type="email" name="email" />
          <ErrorMessage className={styles.error} name="email" component="div" />
        </label>

        <label className={styles.label}>
          Password
          <Field className={styles.input} type="password" name="password" />
          <ErrorMessage className={styles.error} name="password" component="div" />
        </label>

        <button className={styles.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;*/
