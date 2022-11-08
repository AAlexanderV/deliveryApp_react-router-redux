import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
    toggleFavouriteItem,
    addToCart,
} from "../features/UserInSession/UserInSessionSlice";

export default function AccountFavourites() {
    const products = useSelector((state) => state.products.value);
    const UserInSession = useSelector((state) => state.UserInSession.value);

    const dispatch = useDispatch();

    return (
        <div className="account_favourites">
            {products.map((item) => {
                if (UserInSession.favourites.includes(item.id)) {
                    return (
                        <div
                            className="account_favourites_item"
                            key={item.id}
                        >
                            <Link to={"/" + item.category + "/" + item.id}>
                                <img
                                    src={require(`../data/images/${item.category}/${item.id}.png`)}
                                    alt="{item.name}"
                                />
                            </Link>
                            <div className="item_bottom">
                                <div className="item_details">
                                    <div className="item_name">{item.name}</div>
                                    <div className="item_price">
                                        {"$ " + item.price}
                                    </div>
                                </div>
                                <div className="item_buttons">
                                    <div className="item_favourite">
                                        <img
                                            src={
                                                UserInSession.favourites.includes(
                                                    item.id
                                                )
                                                    ? require("../data/images/favourite-true.png")
                                                    : require("../data/images/favourite-false.png")
                                            }
                                            alt="favourite"
                                            height="20"
                                            data-id={item.id}
                                            onClick={(e) =>
                                                dispatch(
                                                    toggleFavouriteItem(
                                                        e.target.dataset.id
                                                    )
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="item_cart">
                                        <img
                                            src={require("../data/images/cart-white.png")}
                                            alt="cart"
                                            height="20"
                                            data-id={item.id}
                                            onClick={(e) =>
                                                dispatch(
                                                    addToCart(
                                                        e.target.dataset.id
                                                    )
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                } else {
                    return <></>;
                }
            })}
        </div>
    );
}
