import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
    toggleFavouriteItem,
    addToCart,
} from "../features/UserInSession/UserInSessionSlice";

export default function Pizzas() {
    const products = useSelector((state) => state.products.value.pizza);
    const UserInSession = useSelector((state) => state.UserInSession.value);
    const isLoggedIn = useSelector((state) => state.isLoggedIn.value);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <section className="pizzas">
            <div className="pizzas_title">PIZZA</div>
            <div className="pizzas_list">
                {products.map((item) => {
                    return (
                        <div
                            className="pizzas_list_item"
                            key={item.id}
                        >
                            <Link to={"/pizza/" + item.id}>
                                <img
                                    src={require(`../data/images/pizza/${item.id}.png`)}
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
                                            // src={require("../data/images/favourite-true.png")}
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
                                            onClick={(e) => {
                                                isLoggedIn
                                                    ? dispatch(
                                                          toggleFavouriteItem(
                                                              e.target.dataset
                                                                  .id
                                                          )
                                                      )
                                                    : navigate("/login");
                                            }}
                                        />
                                    </div>
                                    <div className="item_cart">
                                        <img
                                            src={require("../data/images/cart-white.png")}
                                            alt="cart"
                                            height="20"
                                            data-id={item.id}
                                            onClick={(e) => {
                                                isLoggedIn
                                                    ? dispatch(
                                                          addToCart(
                                                              e.target.dataset
                                                                  .id
                                                          )
                                                      )
                                                    : navigate("/login");
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
