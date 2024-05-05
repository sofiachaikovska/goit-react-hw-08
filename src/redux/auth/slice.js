import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./operations";
import { AUTH_SLICE_INITAL_STATE } from "../../utils/constants";

const authSlice = createSlice({
  name: "auth",
  initialState: AUTH_SLICE_INITAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })

      .addCase(logout.fulfilled, () => {
        return AUTH_SLICE_INITAL_STATE;
      })

      .addCase(refreshUser.pending, (state) => {
        state.isLoading = true;
        state.isRefreshing = true;
        state.isError = false;
      })

      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
        state.isRefreshing = false;
      })

      .addCase(refreshUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isRefreshing = false;
      })

      .addMatcher(
        isAnyOf(register.pending, login.pending, logout.pending),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )

      .addMatcher(
        isAnyOf(register.rejected, login.rejected, logout.rejected),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      ),
});

export const authReducer = authSlice.reducer;
