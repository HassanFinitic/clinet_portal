import { createSlice } from "@reduxjs/toolkit";
import { withdrawApi } from "./withdraw.api";
import { handleApiSuccess } from "../../helper/functions/handleApiSuccess";
import { handleApiError } from "../../helper/functions/handleApiError";
import type { Withdrawals } from "./types/withdraw.type";

interface AuthState {
  withdraws: Withdrawals | null;
  loading: boolean;
  messageError: string | null;
}

const initialState: AuthState = {
  withdraws: null,
  loading: false,
  messageError: null,
};

const withdrawSlice = createSlice({
  name: "withdraw",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        withdrawApi.endpoints.getWithdraw.matchFulfilled,
        handleApiSuccess
      )
      .addMatcher(
        withdrawApi.endpoints.generateWithdraw.matchRejected,
        handleApiError
      ).addMatcher(
        withdrawApi.endpoints.getGatewayWithdraw.matchFulfilled,
        handleApiSuccess
      ).addMatcher(
        withdrawApi.endpoints.generateWithdrawCrypto.matchFulfilled,
        handleApiSuccess
      ).addMatcher(
        withdrawApi.endpoints.getGatewayWithdraw.matchRejected,
        handleApiError
      ).addMatcher(
        withdrawApi.endpoints.generateWithdrawCrypto.matchRejected,
        handleApiError
      )
  },
});

export default withdrawSlice.reducer;
