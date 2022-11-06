import { createSlice } from "@reduxjs/toolkit";

export const isLoggedInSlice = createSlice({
    name: "isLoggedIn",
    initialState: {
        value: false,
    },
    reducers: {
        logIn: (state) => {
            state.value = true;
        },
        logOut: (state) => {
            state.value = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut } = isLoggedInSlice.actions;

export default isLoggedInSlice.reducer;
