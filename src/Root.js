import "./Root.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Root() {
    // const count = useSelector((state) => state.counter.value);
    // const logInStatus = useSelector((state) => state.isLoggedIn.value);
    // const productsList = useSelector((state) => state.products.value);
    // const dispatch = useDispatch();

    // const { products } = useLoaderData();
    // console.log(products);

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export function useLoader() {
    const products = useSelector((state) => state.products.value);
    return { products };
}

export default Root;
