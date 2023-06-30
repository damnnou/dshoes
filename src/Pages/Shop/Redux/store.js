import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./product/productApi";
import filter from "./filter/filter.slice";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        filter
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(productApi.middleware),
}) 
