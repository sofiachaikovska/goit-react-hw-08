import css from "./LoginForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  LOGIN_FORM_INITIAL_VALUES,
  MIN_CHAR_PASSWORD_VALIDATION,
} from "../../utils/constants";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const loginUserSchema = Yup.object().shape({
  email: Yup.string()
    .required("*Email address is required")
    .email("Invalid email"),
  password: Yup.string()
    .required("*Password is required")
    .min(MIN_CHAR_PASSWORD_VALIDATION, "Invalid password"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div className={css.loginFormWrapper}>
      <Formik
        initialValues={LOGIN_FORM_INITIAL_VALUES}
        validationSchema={loginUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.loginForm}>
          <label className={css.loginFormLabel}>
            <span className={css.loginFormLabelAccent}>Email:</span>
            <Field
              className={css.loginFormField}
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage
              className={css.loginFormErrorMessage}
              component="p"
              name="email"
            />
          </label>{" "}
          <label className={css.loginFormLabel}>
            <span className={css.loginFormLabelAccent}>Password:</span>
            <Field
              className={css.loginFormField}
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage
              className={css.loginFormErrorMessage}
              component="p"
              name="password"
            />
          </label>
          <button type="submit" className={css.loginFormBtn}>
            Log in
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
