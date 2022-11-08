import CartItemList from "./CartItemList";
// import { useState } from "react";
import { useSelector } from "react-redux";

export default function AccountFavourites() {
    // const [totalToPay, setTotalToPay] = useState(0);

    const products = useSelector((state) => state.products.value);
    const UserInSession = useSelector((state) => state.UserInSession.value);

    let totalToPay = 0;
    UserInSession.cart.forEach((userCartItem) => {
        const product = products.find((item) => userCartItem.id === item.id);
        const price = product.price * userCartItem.count;
        totalToPay += price;
    });

    return (
        <div className="account_cart">
            <header></header>

            <CartItemList />

            <div className="account_cart_footer">
                <div className="cart_total">
                    <h3>Total to pay: </h3>
                    <p>{`$ ${totalToPay}`}</p>
                </div>
            </div>
            <div className="pay_container">
                <button className="cart_payBtn">Continue and Pay</button>
            </div>
        </div>
    );
}
