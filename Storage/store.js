import { configureStore, createReducer } from "@reduxjs/toolkit";
import categoryApi from "../Apis/categoryApi";
import vehicleApi from "../Apis/vehicleApi";
import { vehicleReducer } from "./redux/vehicleSlice";
import { categoryReducer } from "./redux/categorySlice";
import accountApi from "../Apis/account";

export const store = configureStore({
  reducer: {
    vehicleStore: vehicleReducer,
    categoryStore: categoryReducer,

    [categoryApi.reducerPath]: categoryApi.reducer,
    [vehicleApi.reducerPath]: vehicleApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoryApi.middleware,
      vehicleApi.middleware,
      accountApi.middleware
    ),
});
