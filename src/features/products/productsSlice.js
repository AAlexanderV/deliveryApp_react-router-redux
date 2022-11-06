import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products/productsList";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        value: products,
    },
    reducers: {
        addMargaritta: (state) => {
            state.value = [
                ...state.value,
                {
                    name: "Margaritta",
                    img: "",
                    price: 5555,
                    ingredients: "",
                    description:
                        "some big text with description for Margaritta",
                },
            ];
        },
        // logOut: (state) => {
        //     state.value = false;
        // },
    },
});

// Action creators are generated for each case reducer function
export const { addMargaritta } = productsSlice.actions;

export default productsSlice.reducer;
