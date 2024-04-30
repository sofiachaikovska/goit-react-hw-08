import css from "./ContactsPage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactsList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectPhonebookIsError,
  selectPhonebookIsLoading,
} from "../../redux/contacts/selectors";

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectPhonebookIsLoading);
  const isError = useSelector(selectPhonebookIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsPageContainer}>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ContactsList />
    </div>
  );
}

export default ContactsPage;
