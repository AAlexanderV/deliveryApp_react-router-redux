import { Outlet, Link, useNavigate } from "react-router-dom";
import toggleActive from "./toggleActiveAccountBtn";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Account() {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.isLoggedIn.value);
    const UserInSession = useSelector((state) => state.UserInSession.value);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [isLoggedIn, navigate]);

    return (
        <section className="account">
            <div className="account_profile">
                <img
                    src={require("../data/images/user-photo_default-image.png")}
                    alt="user_photo"
                />
                <h2>{UserInSession.name}</h2>
                <h3>{UserInSession.email}</h3>
                <h3>{UserInSession.phone}</h3>
            </div>

            <div className="account_content">
                <nav>
                    <Link
                        to="/account/cart/"
                        id="accountToCartBtn"
                        onClick={toggleActive}
                    >
                        Shopping cart
                    </Link>
                    <Link
                        to="/account/favourites/"
                        id="accountToFavouritesBtn"
                        onClick={toggleActive}
                    >
                        Favourites
                    </Link>
                </nav>
                <Outlet />
            </div>
        </section>
    );
}
