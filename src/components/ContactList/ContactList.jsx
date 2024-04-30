import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactListContainer}>
      {Array.isArray(contacts) && contacts.length === 0 && (
        <li className={css.warning}>You do not have any added contacts yet!</li>
      )}
      {Array.isArray(contacts) &&
        contacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })}
    </ul>
  );
};

export default ContactList;
