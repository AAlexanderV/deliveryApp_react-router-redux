import { createBrowserRouter } from "react-router-dom";

import Root from "../Root";
import Menu from "../components/Menu";
import Pizzas from "../components/Pizzas";
import Sushi from "../components/Sushi";
import Drinks from "../components/Drinks";
import IndividualItem from "../components/IndividualItem";
import Login from "../components/Login";
import Account from "../components/Account";
import AccountFavourites from "../components/AccountFavourites";
import AccountCart from "../components/AccountCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        // loader: rootLoader,
        children: [
            {
                path: "/",
                element: <Menu />,
            },
            {
                path: "/pizza/",
                element: <Pizzas />,
            },
            {
                path: "/pizza/:id/",
                element: <IndividualItem />,
            },
            {
                path: "/sushi/",
                element: <Sushi />,
            },
            {
                path: "/sushi/:id/",
                element: <IndividualItem />,
            },
            {
                path: "/drinks/",
                element: <Drinks />,
            },
            {
                path: "/drinks/:id/",
                element: <IndividualItem />,
            },
            // ACCOUNT
            {
                path: "/login/",
                element: <Login />,
            },
            {
                path: "/account/",
                element: <Account />,
                children: [
                    {
                        path: "/account/favourites",
                        element: <AccountFavourites />,
                    },
                    {
                        path: "/account/cart/",
                        element: <AccountCart />,
                    },
                ],
            },
        ],
    },
]);

export default router;
