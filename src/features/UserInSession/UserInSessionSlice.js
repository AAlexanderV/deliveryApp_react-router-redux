import { createSlice } from "@reduxjs/toolkit";

export const userInSessionSlice = createSlice({
    name: "userInSession",
    initialState: {
        value: localStorage.getItem("userInSession")
            ? JSON.parse(localStorage.getItem("userInSession"))
            : {
                  name: "",
                  favourites: [],
                  cart: [],
              },
    },
    reducers: {
        setUserInSession: (state, action) => {
            const userInSession = {
                name: action.payload.name,
                email: action.payload.email,
                phone: action.payload.phone,
                favourites: action.payload.favourites,
                cart: action.payload.cart,
            };

            localStorage.setItem(
                "userInSession",
                JSON.stringify(userInSession)
            );

            state.value = userInSession;
        },
        logoutUserInSession: (state) => {
            localStorage.removeItem("userInSession");

            state.value = {
                name: "",
                favourites: [],
                cart: [],
            };
        },
        toggleFavouriteItem: (state, action) => {
            const favouritesNew = [...state.value.favourites];

            if (favouritesNew.includes(action.payload)) {
                const i = favouritesNew.findIndex(
                    (value) => value === action.payload
                );
                favouritesNew.splice(i, 1);
            } else {
                favouritesNew.push(action.payload);
            }

            state.value = {
                ...state.value,
                favourites: favouritesNew,
            };

            localStorage.setItem("userInSession", JSON.stringify(state.value));

            const users = JSON.parse(localStorage.getItem("users"));
            const index = users.findIndex((i) => state.value.email === i.email);

            users[index].favourites = favouritesNew;
            localStorage.setItem("users", JSON.stringify(users));
        },
        addToCart: (state, action) => {
            const cartNew = [...state.value.cart];
            let index = cartNew.findIndex((item) => item.id === action.payload);

            if (index >= 0) {
                cartNew[index].count += 1;
            } else {
                cartNew.push({ id: action.payload, count: 1 });
            }

            state.value = {
                ...state.value,
                cart: cartNew,
            };

            localStorage.setItem("userInSession", JSON.stringify(state.value));

            const users = JSON.parse(localStorage.getItem("users"));
            const i = users.findIndex((i) => state.value.email === i.email);

            users[i].cart = cartNew;
            localStorage.setItem("users", JSON.stringify(users));
        },
        reduceCartItemQuantity: (state, action) => {
            const cartNew = [...state.value.cart];
            let index = cartNew.findIndex((item) => item.id === action.payload);

            if (cartNew[index].count > 1) {
                cartNew[index].count -= 1;

                state.value = {
                    ...state.value,
                    cart: cartNew,
                };

                localStorage.setItem(
                    "userInSession",
                    JSON.stringify(state.value)
                );

                const users = JSON.parse(localStorage.getItem("users"));
                const i = users.findIndex((i) => state.value.email === i.email);

                users[i].cart = cartNew;
                localStorage.setItem("users", JSON.stringify(users));
            }
        },
        deleteCartItem: (state, action) => {
            const cartNew = [...state.value.cart];
            let index = cartNew.findIndex((item) => item.id === action.payload);

            cartNew.splice(index, 1);

            state.value = {
                ...state.value,
                cart: cartNew,
            };

            localStorage.setItem("userInSession", JSON.stringify(state.value));

            const users = JSON.parse(localStorage.getItem("users"));
            const i = users.findIndex((i) => state.value.email === i.email);

            users[i].cart = cartNew;
            localStorage.setItem("users", JSON.stringify(users));
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setUserInSession,
    logoutUserInSession,
    toggleFavouriteItem,
    addToCart,
    reduceCartItemQuantity,
    deleteCartItem,
} = userInSessionSlice.actions;

export default userInSessionSlice.reducer;
