import { configureStore } from "@reduxjs/toolkit";
import isLoggedInReducer from "../features/isLoggedIn/isLoggedInSlice";
import productsReducer from "../features/products/productsSlice";
import UserInSessionReducer from "../features/UserInSession/UserInSessionSlice";
import shoppingCartReducer from "../features/shoppingCart/shoppingCartSlice";

export default configureStore({
    reducer: {
        isLoggedIn: isLoggedInReducer,
        UserInSession: UserInSessionReducer,

        products: productsReducer,
        shoppingCart: shoppingCartReducer,
    },
});
