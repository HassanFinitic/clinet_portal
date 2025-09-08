import { createSlice } from "@reduxjs/toolkit";
import { chainApi } from "./chain.api";
import type { Chains } from "./types/chain.type";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

interface AuthState {
  chains: Chains | null;
  loading: boolean;
  messageError: string | null;
}

const initialState: AuthState = {
  chains: null,
  loading: false,
  messageError: null,
};

const chainSlice = createSlice({
  name: "chain",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        chainApi.endpoints.getChains.matchFulfilled,
        (state, { payload }) => {
          state.chains = payload;
          state.loading = true;
        }
      )
      .addMatcher(
        chainApi.endpoints.getChains.matchRejected,
        (state, { payload }) => {
          const err = payload as FetchBaseQueryError & {
            data: { message?: string };
          };

          state.messageError = err.data?.message ?? "Unknown error";
          state.loading = true;
        }
      );
  },
});

export default chainSlice.reducer;
