import css from "./LoginPage.module.css";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

function LoginPage() {
  return (
    <div className={css.loginPageWrapper}>
      <h2 className={css.loginTitle}>
        Log in to Phone<span className={css.loginPageAccent}>Book</span>
      </h2>
      <LoginForm />
      <Link className={css.loginPageLink} to="/register">
        Sign Up for PhoneBook
      </Link>
    </div>
  );
}

export default LoginPage;
