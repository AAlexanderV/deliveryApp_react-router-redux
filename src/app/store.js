import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import isLoggedInReducer from "../features/isLoggedIn/isLoggedInSlice";
import productsReducer from "../features/products/productsSlice";
import shoppingCartReducer from "../features/shoppingCart/shoppingCartSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        isLoggedIn: isLoggedInReducer,
        products: productsReducer,
        shoppingCart: shoppingCartReducer,
    },
});
