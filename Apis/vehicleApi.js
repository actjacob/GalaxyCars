import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const VehicleApi = createApi({
  reducerPath: "VehicleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://98fa-193-140-242-120.ngrok-free.app/api/",
  }),
  endpoints: (builder) => ({
    GetAllVehicle: builder.query({
      query: () => ({
        url: "Vehicle/GetAllVehicle",
        method: "GET",
      }),
    }),
    CreateVehicle: builder.mutation({
      query: (VehicleModel) => ({
        url: "Vehicle/CreateVehicle",
        method: "POST",
        body: VehicleModel,
      }),
    }),
    RemoveVehicle: builder.mutation({
      query: (VehicleId) => ({
        url: `Vehicle/DeleteVehicle/${VehicleId}`,
        method: "DELETE",
      }),
    }),
    UpdateVehicle: builder.mutation({
      query: (model) => ({
        url: `Vehicle/UpdateVehicle/${model.VehicleId}`,
        method: "PUT",
        body: model.VehicleModel,
      }),
    }),
    GetVehicleById: builder.query({
      query: (VehicleId) => ({
        url: `Vehicle/Vehicle/${VehicleId}`,
      }),
    }),
  }),
});

export const {
  useGetAllVehicleQuery,
  useCreateVehicleMutation,
  useRemoveVehicleMutation,
  useUpdateVehicleMutation,
  useGetVehicleByIdQuery,
} = VehicleApi;
export default VehicleApi;
