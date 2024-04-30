import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import {
  MAX_CHAR_NAME_VALIDATION,
  MAX_CHAR_NUMBER_VALIDATION,
  FORM_INITIAL_STATE,
} from "../../utils/constants";

const ContactForm = () => {
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .max(
        MAX_CHAR_NAME_VALIDATION,
        `*Username must not exceed ${MAX_CHAR_NAME_VALIDATION} characters`
      )
      .required("*Name is required"),
    number: Yup.string()
      .max(MAX_CHAR_NUMBER_VALIDATION, "*The number is too long")
      .required("*Number is required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_STATE}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.formContainer}>
        <label className={css.formItem}>
          <span className={css.formTitle}>Name</span>
          <Field type="text" name="name" className={css.formField}></Field>
          <ErrorMessage
            name="name"
            component="p"
            className={css.formErrorMessage}
          />
        </label>
        <label className={css.formItem}>
          <span className={css.formTitle}>Number</span>
          <Field type="tel" name="number" className={css.formField}></Field>
          <ErrorMessage
            name="number"
            component="p"
            className={css.formErrorMessage}
          />
        </label>
        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
