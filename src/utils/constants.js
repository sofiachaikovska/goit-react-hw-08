import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const REGISTER_FORM_INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

export const LOGIN_FORM_INITIAL_VALUES = {
  email: "",
  password: "",
};

export const AUTH_SLICE_INITAL_STATE = {
  isLoggedIn: false,
  userData: null,
  token: null,
  isLoading: false,
  isError: false,
};

export const CONTACTS_INITAL_STATE = {
  contacts: null,
  isLoading: false,
  isError: false,
};

export const FORM_INITIAL_STATE = {
  name: "",
  number: "",
};

export const MAX_CHAR_NAME_VALIDATION = 50;
export const MAX_CHAR_NUMBER_VALIDATION = 50;
export const MIN_CHAR_PASSWORD_VALIDATION = 8;
