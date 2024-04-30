import css from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Modal = ({ onClose, contactName, contactId }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={css.modalContainer}>
      <p className={css.modalTitle}>{`Delete contact ${contactName}?`}</p>
      <div className={css.modalBtnContainer}>
        <button className={css.cancelBtn} type="button" onClick={onClose}>
          Cancel
        </button>
        <button
          className={css.deleteBtn}
          type="button"
          onClick={handleDeleteContact}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Modal;
