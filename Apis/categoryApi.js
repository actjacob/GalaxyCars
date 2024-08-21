import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useGetVehicleByIdQuery } from "./vehicleApi";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://32b5-193-140-242-120.ngrok-free.app/api/",
  }),
  tagTypes: ["category"],
  endpoints: (builder) => ({
    GetAllCategory: builder.query({
      query: () => ({
        url: "Category",
        method: "GET",
      }),
      providesTags: ["category"],
    }),
    CreateCategory: builder.mutation({
      query: (categoryModel) => ({
        url: "Category",
        method: "POST",
        body: categoryModel,
      }),
      invalidatesTags: ["category"],
    }),
    RemoveCategory: builder.mutation({
      query: (categoryId) => ({
        url: `Category/${categoryId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["category"],
    }),
    UpdateCategory: builder.mutation({
      query: (model) => ({
        url: `Category/${model.categoryId}`,
        method: "PUT",
        body: model.categoryModel,
      }),
      invalidatesTags: ["category"],
    }),
    GetVehiclesByCategoryId: builder.query({
      query: (categoryId) => ({
        url: `Category/GetVehicles/${categoryId}`,
        method: "GET",
      }),
      providesTags: ["category"],
    }),
    GetCategoryById: builder.query({
      query: (categoryId) => ({
        url: `Category/${categoryId}`,
        method: "GET",
      }),
      providesTags: ["category"],
    }),
  }),
});

export const { useGetAllCategoryQuery, useCreateCategoryMutation, useRemoveCategoryMutation, useUpdateCategoryMutation, useGetVehiclesByCategoryIdQuery, useGetCategoryByIdQuery } = categoryApi;
export default categoryApi;
