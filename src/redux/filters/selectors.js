import { createSelector } from "@reduxjs/toolkit";
import {selectPhonebookContacts} from "../contacts/selectors"

export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectPhonebookContacts, selectNameFilter],
  (contacts, filter) => {
    if (!Array.isArray(contacts)) {
      return [];
    }

    return contacts.filter(
      (contact) =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
