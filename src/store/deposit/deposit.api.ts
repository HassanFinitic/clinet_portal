import type { Withdrawals } from "./types/withdraw.type";
import { api as baseApi } from "../base.api";
import type {
  GenerateWithdrawalResponse,
  GenerateWithdrawRequest,
} from "./types/generateWithdraw.type";
export const depositApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDeposit: builder.query<Withdrawals, void>({
      query: () => "transactions/deposit",
    }),
    generateWithdraw: builder.mutation<
      GenerateWithdrawalResponse,
      GenerateWithdrawRequest
    >({
      query: (data) => ({
        url: "transactions/withdraw",
        method: "POST",
        body: data,
      }),
    }),
    generateWithdrawCrypto: builder.mutation<
      GenerateWithdrawalResponse,
      GenerateWithdrawRequest
    >({
      query: (data) => ({
        url: "transactions/withdraw/crypto",
        method: "POST",
        body: data,
      }),
    }),
    getGatewayWithdraw: builder.query<
      GenerateWithdrawalResponse,
      GenerateWithdrawRequest
    >({
      query: () => "transactions/withdraw/gateways",
    }),
  }),
});

export const {
  useGenerateWithdrawMutation,
  useGenerateWithdrawCryptoMutation,
  useGetGatewayWithdrawQuery,
} = depositApi;
