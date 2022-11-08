import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
    toggleFavouriteItem,
    addToCart,
} from "../features/UserInSession/UserInSessionSlice";

export default function IndividualItem() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = useSelector((state) => state.products.value);
    const UserInSession = useSelector((state) => state.UserInSession.value);
    const isLoggedIn = useSelector((state) => state.isLoggedIn.value);

    const currentItem = products.find((value) => value.id === id);

    return (
        <section className="individual_item">
            <div className="individual_item_img">
                <img
                    src={require(`../data/images/${currentItem.category}/${currentItem.id}.png`)}
                    alt="{currentItem.name}"
                />
            </div>

            <div className="individual_item_buttons">
                <div className="individual_item_favourite">
                    <img
                        src={
                            UserInSession.favourites.includes(currentItem.id)
                                ? require("../data/images/favourite-true.png")
                                : require("../data/images/favourite-false.png")
                        }
                        alt="favourite"
                        // height="20"
                        data-id={currentItem.id}
                        onClick={(e) => {
                            isLoggedIn
                                ? dispatch(
                                      toggleFavouriteItem(e.target.dataset.id)
                                  )
                                : navigate("/login");
                        }}
                    />
                </div>
                <div className="individual_item_cart">
                    <img
                        src={require("../data/images/cart-white.png")}
                        alt="cart"
                        height="20"
                        data-id={currentItem.id}
                        onClick={(e) => {
                            isLoggedIn
                                ? dispatch(addToCart(e.target.dataset.id))
                                : navigate("/login");
                        }}
                    />
                </div>
            </div>

            <div className="individual_item_bottom">
                <div className="individual_item_details">
                    <div className="individual_item_name">
                        {currentItem.name}
                    </div>
                    <div className="individual_item_price">
                        {"$ " + currentItem.price}
                    </div>
                    <div className="individual_item_description">
                        {"Description: " + currentItem.description}
                    </div>
                    <div className="individual_item_ingredients">
                        {"Ingredients: " + currentItem.ingredients}
                    </div>
                </div>
            </div>
        </section>
    );
}
