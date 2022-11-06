import { createSlice } from "@reduxjs/toolkit";
import pizzas from "../../data/products/pizzaList";

export const pizzasSlice = createSlice({
    name: "pizzas",
    initialState: {
        value: 0,
    },
    reducers: {
        addMargaritta: (state) => {
            state.value.push({
                name: "Margaritta",
                img: "",
                price: 333,
                ingredients: "",
            });
            return state;
        },
        decrement: (state) => {
            // state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addMargaritta, decrement, incrementByAmount } =
    pizzasSlice.actions;

export default pizzasSlice.reducer;
