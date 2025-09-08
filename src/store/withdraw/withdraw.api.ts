import type { Withdrawals } from "./types/withdraw.type";
import { api as baseApi } from "../base.api";
import type { GenerateWithdrawalResponse, GenerateWithdrawRequest } from "./types/generateWithdraw.type";
export const withdrawApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWithdraw: builder.query<Withdrawals, void>({
      query: () => "transactions/withdraw",
    }),
    generateWithdraw: builder.mutation<GenerateWithdrawalResponse, GenerateWithdrawRequest>({
      query: (data) => ({
        url: "transactions/withdraw",
        method: "POST",
        body: data,
      }),
    }),
    generateWithdrawCrypto: builder.mutation<GenerateWithdrawalResponse, GenerateWithdrawRequest>({
      query: (data) => ({
        url: "transactions/withdraw/crypto",
        method: "POST",
        body: data,
      }),
    }),
    getGatewayWithdraw: builder.query<GenerateWithdrawalResponse, GenerateWithdrawRequest>({
      query: () => "transactions/withdraw/gateways"
    }),
  }),
});

export const { useGetWithdrawQuery, useGenerateWithdrawMutation, useGenerateWithdrawCryptoMutation, useGetGatewayWithdrawQuery } = withdrawApi;


