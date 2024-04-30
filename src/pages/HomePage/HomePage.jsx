import css from "./HomePage.module.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className={css.homePageWrapper}>
      <h1 className={css.title}>
        Welcome to Phone<span className={css.titleAccent}>Book</span>
      </h1>
      <p className={css.status}>
        Keep your communications safe and organized - one app for all your
        contacts!
      </p>
      <Link className={css.homePageLink} to="/login">
        Get started!
      </Link>
    </div>
  );
}

export default HomePage;
