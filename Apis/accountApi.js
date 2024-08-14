import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useGetVehicleByIdQuery } from "./vehicleApi";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://d646-2a02-e0-6a0f-2900-4806-5c65-e448-4503.ngrok-free.app/api/",
  }),

  endpoints: (builder) => ({
    CheckIsTrueUser: builder.mutation({
      query: (loginModel) => ({
        url: "Account/CheckIsTrueUser",
        method: "POST",
        body: loginModel,
      }),
    }),
  }),
});

export const { useCheckIsTrueUserMutation } = accountApi;
export default accountApi;
