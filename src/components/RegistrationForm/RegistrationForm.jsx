import css from "./RegistrationForm.module.css";
import * as Yup from "yup";
import {
  REGISTER_FORM_INITIAL_VALUES,
  MAX_CHAR_NAME_VALIDATION,
  MIN_CHAR_PASSWORD_VALIDATION,
} from "../../utils/constants";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const registerUserSchema = Yup.object().shape({
  name: Yup.string()
    .required("*Name is required")
    .max(
      MAX_CHAR_NAME_VALIDATION,
      `*Username must not exceed ${MAX_CHAR_NAME_VALIDATION} characters`
    ),
  email: Yup.string()
    .required("*Email address is required")
    .email("*Email address must be valid"),
  password: Yup.string()
    .required("*Password is required")
    .min(
      MIN_CHAR_PASSWORD_VALIDATION,
      `*Password can have at least ${MIN_CHAR_PASSWORD_VALIDATION} characters`
    ),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div className={css.registrationFormWrapper}>
      <Formik
        initialValues={REGISTER_FORM_INITIAL_VALUES}
        validationSchema={registerUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.registrationForm}>
          <label className={css.registrationFormLabel}>
            <span className={css.registrationFormLabelAccent}>Name:</span>
            <Field
              className={css.registrationFromField}
              type="text"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage
              className={css.registrationFormErrorMessage}
              component="p"
              name="name"
            />
          </label>
          <label className={css.registrationFormLabel}>
            <span className={css.registrationFormLabelAccent}>Email:</span>
            <Field
              className={css.registrationFromField}
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage
              className={css.registrationFormErrorMessage}
              component="p"
              name="email"
            />
          </label>
          <label className={css.registrationFormLabel}>
            <span className={css.registrationFormLabelAccent}>Password:</span>
            <Field
              className={css.registrationFromField}
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage
              className={css.registrationFormErrorMessage}
              component="p"
              name="password"
            />
          </label>
          <button className={css.registrationFromBtn} type="submit">
            Create an account
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
