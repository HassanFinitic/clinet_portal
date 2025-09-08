import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./auth.api";
import type { GetUserProfile } from "./types/profile.type";
import { handleApiError } from "../../helper/functions/handleApiError";
import { handleApiSuccess } from "../../helper/functions/handleApiSuccess";

interface AuthState {
  user: GetUserProfile | null;
  isAuthenticated: boolean;
  messageError: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  messageError: null,
  loading: true,
};

const depositTransactionSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state) => {
        handleApiSuccess(state);
        state.isAuthenticated = true;
      })
      .addMatcher(authApi.endpoints.login.matchRejected, handleApiError)
      .addMatcher(
        authApi.endpoints.getProfile.matchFulfilled,
        (state, { payload }) => {
          handleApiSuccess(state);
          state.user = payload.result;
        }
      )
      .addMatcher(
        authApi.endpoints.generateOtp.matchFulfilled,
        handleApiSuccess
      )
      .addMatcher(authApi.endpoints.generateOtp.matchRejected, handleApiError)
      .addMatcher(authApi.endpoints.verifyOtp.matchFulfilled, handleApiSuccess)
      .addMatcher(authApi.endpoints.verifyOtp.matchRejected, handleApiError)
      .addMatcher(authApi.endpoints.generateQR.matchFulfilled, handleApiSuccess)
      .addMatcher(authApi.endpoints.generateQR.matchRejected, handleApiError);
  },
});

export const { logout } = depositTransactionSlice.actions;
export default depositTransactionSlice.reducer;
