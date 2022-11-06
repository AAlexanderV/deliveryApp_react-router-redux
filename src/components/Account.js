import { Outlet, Link } from "react-router-dom";
import toggleActive from "./toggleActiveAccountBtn";

export default function Account() {
    return (
        <section className="account">
            <div className="account_profile">
                <img
                    src={require("../data/images/user-photo_default-image.png")}
                    alt="user_photo"
                />
                <h2>USER name</h2>
                <h3>User email: ___</h3>
                <h3>User phone number: _______</h3>
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
