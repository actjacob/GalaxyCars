import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useGetVehicleByIdQuery } from "./vehicleApi";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://44f8-178-240-65-68.ngrok-free.app/api/",
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
