import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logout } from "../auth/operations";
import { CONTACTS_INITAL_STATE } from "../../utils/constants";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: CONTACTS_INITAL_STATE,
  extraReducers: (builder) =>
    builder
      // GET CONTACTS
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.isLoading = false;
        state.isError = "Failed to fetch contact";
      })
      // ADD CONTACT
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, (state) => {
        state.isLoading = false;
        state.isError = "Failed to add contact";
      })
      // DELETE CONTACT
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state) => {
        state.isLoading = false;
        state.isError = "Failed to delete contact";
      })
      // LOGOUT
      .addCase(logout.fulfilled, () => {
        return CONTACTS_INITAL_STATE;
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
