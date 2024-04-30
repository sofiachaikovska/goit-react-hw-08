import css from "./Contact.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Contact = ({ contact }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseModal = () => setIsModalOpen(false);

  const onDeleteContact = () => {
    setIsModalOpen(true);
  };

  return (
    <li className={css.contactListItem}>
      <div className={css.contactInfoContainer}>
        <div className={css.contactData}>
          <p className={css.contactAccent}>Name:</p>
          <p className={css.contactDataItem}>{contact.name}</p>
        </div>
        <div className={css.contactData}>
          <p className={css.contactAccent}>Number:</p>
          <p className={css.contactDataItem}>{contact.number}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onDeleteContact}
        className={css.deleteButton}
      >
        Delete
      </button>
      {isModalOpen && (
        <Modal
          onClose={onCloseModal}
          contactName={contact.name}
          contactId={contact.id}
        />
      )}
    </li>
  );
};

export default Contact;
