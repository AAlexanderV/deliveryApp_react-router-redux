import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
    addToCart,
    reduceCartItemQuantity,
    deleteCartItem,
} from "../features/UserInSession/UserInSessionSlice";

export default function CartItemList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.value);
    const UserInSession = useSelector((state) => state.UserInSession.value);
    const cartProducts = [];
    UserInSession.cart.forEach((cartItemInfo) => {
        const cartItem = products.find((item) => item.id === cartItemInfo.id);

        cartProducts.push(cartItem);
    });

    return (
        <div className="cart_itemList">
            {cartProducts.map((item) => {
                return (
                    <div
                        className="cart_item"
                        key={item.id}
                    >
                        <Link to={"/" + item.category + "/" + item.id}>
                            <img
                                src={require(`../data/images/${item.category}/${item.id}.png`)}
                                alt="{item.name}"
                            />
                        </Link>

                        <div className="cart_item_info">
                            <div className="cart_item_name">{item.name}</div>
                            <div className="cart_item_ingredients">
                                {"Ingredients: " + item.ingredients}
                            </div>
                        </div>
                        <div className="cart_item_price">
                            {"$ " +
                                item.price *
                                    UserInSession.cart.find(
                                        (cartItem) => cartItem.id === item.id
                                    ).count}
                        </div>
                        <div className="quantity_switcher">
                            <button
                                className="minus"
                                data-id={item.id}
                                onClick={(e) =>
                                    dispatch(
                                        reduceCartItemQuantity(
                                            e.target.dataset.id
                                        )
                                    )
                                }
                            >
                                -
                            </button>
                            <div className="item_count">
                                {
                                    UserInSession.cart.find(
                                        (cartItem) => cartItem.id === item.id
                                    ).count
                                }
                            </div>
                            <button
                                className="plus"
                                data-id={item.id}
                                onClick={(e) =>
                                    dispatch(addToCart(e.target.dataset.id))
                                }
                            >
                                +
                            </button>
                        </div>
                        <button
                            className="cart_item_delete"
                            data-id={item.id}
                            onClick={(e) =>
                                dispatch(deleteCartItem(e.target.dataset.id))
                            }
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
