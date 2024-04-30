import css from "./RegistrationPage.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

function RegistrationPage() {
  return (
    <div className={css.registrationPageWrapper}>
      <h2 className={css.registrationTitle}>
        Register on Phone
        <span className={css.registrationPageAccent}>Book</span>
      </h2>
      <RegistrationForm />
    </div>
  );
}

export default RegistrationPage;
