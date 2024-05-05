import css from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  return (
    <div className={css.userMenuContainer}>
      <p className={css.userName}>{userData.name}</p>
      <button
        className={css.userMenuBtn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
