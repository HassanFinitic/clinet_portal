import { api as baseApi } from "../base.api";
import type { LoginCredentials, LoginResponse } from "./types/login.type";
import type { VerifyOTP } from "./types/verifyOtp.type";
import type { GetUserProfile } from "./types/profile.type";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<{ result: GetUserProfile }, void>({
      query: () => "auth/profile",
    }),
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body: {
          email: body.email,
          password: body.password,
        },
      }),
    }),
    verifyOtp: builder.mutation<LoginResponse, VerifyOTP>({
      query: (body) => ({
        url: "auth/verify_otp",
        method: "POST",
        body: {
          code: body.code,
          email: body.email,
          type: body.type,
        },
      }),
    }),
    generateOtp: builder.mutation<{ status: string }, void>({
      query: () => ({
        url: "auth/generate-otp",
        method: "POST",
      }),
    }),
    generateQR: builder.query<{ result: string }, void>({
      query: () => "auth/generateQR",
    }),
  }),
});

export const {
  useGetProfileQuery,
  useLoginMutation,
  useGenerateQRQuery,
  useLazyGetProfileQuery,
  useLazyGenerateQRQuery,
  useGenerateOtpMutation,
  useVerifyOtpMutation,
} = authApi;
