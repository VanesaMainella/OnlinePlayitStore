import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./products/products.slice";
import categoriesReducer from "./categories/categories.Slice";
import cartReducer from './cart/cart.slice';


export const store = configureStore({
    reducer:{
        products: productsReducer,
        categories: categoriesReducer,
        cart: cartReducer,

    },
});