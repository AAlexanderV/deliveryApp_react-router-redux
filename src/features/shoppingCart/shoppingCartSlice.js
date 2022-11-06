import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: {
        value: [],
    },
    reducers: {
        addProduct: (state) => {
            state.value = "";
        },
        removeProduct: (state) => {
            state.value = "";
        },
    },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
