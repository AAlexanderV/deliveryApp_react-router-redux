import { configureStore } from "@reduxjs/toolkit";
import pizzasSlice from "../features/products/pizzasSlice";

export default configureStore({
    reducer: { pizzas: pizzasSlice },
});
