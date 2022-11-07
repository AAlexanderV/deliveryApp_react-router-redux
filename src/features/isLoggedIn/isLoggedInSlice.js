import { createSlice } from "@reduxjs/toolkit";

export const isLoggedInSlice = createSlice({
    name: "isLoggedIn",
    initialState: {
        value: localStorage.getItem("userInSession") ? true : false,
    },
    reducers: {
        loggedInTrue: (state) => {
            state.value = true;
        },
        loggedInFalse: (state) => {
            state.value = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { loggedInTrue, loggedInFalse } = isLoggedInSlice.actions;

export default isLoggedInSlice.reducer;
