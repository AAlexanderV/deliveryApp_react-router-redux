import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserInSession } from "../features/UserInSession/UserInSessionSlice";
import { loggedInFalse } from "../features/isLoggedIn/isLoggedInSlice";

export default function HeaderTop() {
    const UserInSession = useSelector((state) => state.UserInSession.value);

    const isLoggedIn = useSelector((state) => state.isLoggedIn.value);

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUserInSession());
        dispatch(loggedInFalse());
    };

    return (
        <div className="header_top">
            <Link
                className="header_logo"
                to="/"
            >
                <img
                    src={require("../data/images/pizza-logo.png")}
                    alt="favourite"
                    height="100"
                />
            </Link>
            <div className="header_contacts">
                <div className="phone">+1(234)567-89-00</div>
                <div className="workingHours">
                    We are working from 10:00 am till 11:00 pm
                </div>
            </div>
            <div className="header_account">
                {isLoggedIn ? (
                    <Link
                        className="account_btn"
                        to="/account/"
                    >
                        {"Hello, " + UserInSession.name}
                    </Link>
                ) : (
                    ""
                )}

                <Link
                    className="header_shopping-cart"
                    to="/account/cart"
                >
                    {UserInSession.cart.length > 0 ? (
                        UserInSession.cart.length
                    ) : (
                        <img
                            src={require("../data/images/cart-white.png")}
                            alt="cart"
                            height="20"
                        />
                    )}
                </Link>

                <Link
                    to="/account/favourites"
                    className="header_favourites"
                    id="headerFavourites"
                >
                    {/* /////// */}
                    <img
                        src={require("../data/images/favourite-true.png")}
                        alt="favourite"
                        height="30"
                    />

                    {/* ///// */}
                    <span
                        className="header_favourites-count"
                        id="headerFavouritesCount"
                    >
                        {UserInSession.favourites.length}
                    </span>
                </Link>

                {isLoggedIn ? (
                    <button
                        className="logout_btn"
                        onClick={logout}
                    >
                        Logout
                    </button>
                ) : (
                    <Link
                        className="login_btn"
                        to="/login/"
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
}
