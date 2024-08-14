import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useGetVehicleByIdQuery } from "./vehicleApi";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://4eec-193-140-242-120.ngrok-free.app/api/",
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
