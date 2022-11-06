import { Link } from "react-router-dom";

export default function HeaderTop() {
    return (
        <div className="header_top">
            <div className="header_logo">
                <img
                    src={require("../data/images/pizza-logo.png")}
                    alt="favourite"
                    height="100"
                />
            </div>
            <div className="header_contacts">
                <div className="phone">+1(234)567-89-00</div>
                <div className="workingHours">
                    We are working from 10:00 am till 11:00 pm
                </div>
            </div>
            <div className="header_account">
                <Link
                    className="account_btn"
                    to="/login/"
                >
                    Account
                </Link>
                <Link
                    className="header_shopping-cart"
                    to="/cart"
                >
                    <img
                        src={require("../data/images/cart-white.png")}
                        alt="cart"
                        height="20"
                    />
                </Link>
                <Link
                    href="/favourites"
                    className="header_favourites"
                    id="headerFavourites"
                >
                    <img
                        src={require("../data/images/favourite-true.png")}
                        alt="favourite"
                        height="20"
                    />
                    <span
                        className="header_favourites-count"
                        id="headerFavouritesCount"
                    >
                        0
                    </span>
                </Link>
            </div>
        </div>
    );
}
