import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useGetVehicleByIdQuery } from "./vehicleApi";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://7243-193-140-242-120.ngrok-free.app/api/",
  }),

  endpoints: (builder) => ({
    GetAllCategory: builder.query({
      query: () => ({
        url: "Category",
        method: "GET",
      }),
    }),
    CreateCategory: builder.mutation({
      query: (categoryModel) => ({
        url: "Category",
        method: "POST",
        body: categoryModel,
      }),
    }),
    RemoveCategory: builder.mutation({
      query: (categoryId) => ({
        url: `Category/${categoryId}`,
        method: "DELETE",
      }),
    }),
    UpdateCategory: builder.mutation({
      query: (model) => ({
        url: `Category/${model.categoryId}`,
        method: "PUT",
        body: model.categoryModel,
      }),
    }),
    GetVehiclesByCategoryId: builder.query({
      query: (categoryId) => ({
        url: `Category/GetVehicles/${categoryId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllCategoryQuery,
  useCreateCategoryMutation,
  useRemoveCategoryMutation,
  useUpdateCategoryMutation,
  useGetVehiclesByCategoryIdQuery,
} = categoryApi;
export default categoryApi;
