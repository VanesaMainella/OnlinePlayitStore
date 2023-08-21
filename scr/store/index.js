import {configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import productsReducer from "./products/products.slice";
import categoriesReducer from "./categories/categories.Slice";
import cartReducer from './cart/cart.slice';
import { categoriesApi } from "./categories/api";
import { productsApi } from "./products/api";


export const store = configureStore({
    reducer:{
        products: productsReducer,
        categories: categoriesReducer,
        cart: cartReducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(categoriesApi.middleware, productsApi.middleware),
});

setupListeners(store.dispatch);