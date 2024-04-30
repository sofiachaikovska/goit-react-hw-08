import css from "./AuthNav.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const AuthNav = () => {
  return (
    <div className={css.authNavWrapper}>
      <NavLink className={getNavLinkClassName} to="/login">
        Login
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/register">
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
