import { configureStore } from "@reduxjs/toolkit";
import { api } from "./base.api";
import authReducer from "./auth/auth.slice";
import chainReducer from "./chain/chain.slice";
import withdrawReducer from "./withdraw/withdraw.slice";
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    chain: chainReducer,
    withdraw: withdrawReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
