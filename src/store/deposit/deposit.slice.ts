import { createSlice } from "@reduxjs/toolkit";
import { depositApi } from "./deposit.api";
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
        depositApi.endpoints.getDeposit.matchFulfilled,
        handleApiSuccess
      )
      .addMatcher(
        depositApi.endpoints.generateWithdraw.matchRejected,
        handleApiError
      ).addMatcher(
        depositApi.endpoints.getGatewayWithdraw.matchFulfilled,
        handleApiSuccess
      ).addMatcher(
        depositApi.endpoints.generateWithdrawCrypto.matchFulfilled,
        handleApiSuccess
      ).addMatcher(
        depositApi.endpoints.getGatewayWithdraw.matchRejected,
        handleApiError
      ).addMatcher(
        depositApi.endpoints.generateWithdrawCrypto.matchRejected,
        handleApiError
      )
  },
});

export default withdrawSlice.reducer;
