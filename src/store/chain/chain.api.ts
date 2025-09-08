import type { Chains } from "./types/chain.type";
import { api as baseApi } from "../base.api";
export const chainApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getChains: builder.query<Chains, void>({
      query: () => "chains",
    }),
  }),
});

export const { useGetChainsQuery } = chainApi;
