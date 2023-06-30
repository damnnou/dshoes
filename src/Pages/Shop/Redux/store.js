import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./product/productApi";
import filters from "./filter/filter.slice";
import cart from './cart/cart.slice'

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        filters,
        cart
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(productApi.middleware),
}) 
