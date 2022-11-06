import { createBrowserRouter } from "react-router-dom";

import Root from "../Root";
import Menu from "../components/Menu";
import Pizzas from "../components/Pizzas";
import PizzaItem from "../components/PizzaItem";
import Sushi from "../components/Sushi";
import SushiItem from "../components/SushiItem";
import Drinks from "../components/Drinks";
import DrinksItem from "../components/DrinksItem";
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
                element: <PizzaItem />,
            },
            {
                path: "/sushi/",
                element: <Sushi />,
            },
            {
                path: "/sushi/:id/",
                element: <SushiItem />,
            },
            {
                path: "/drinks/",
                element: <Drinks />,
            },
            {
                path: "/drinks/:id/",
                element: <DrinksItem />,
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
