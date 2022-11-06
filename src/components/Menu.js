import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <section className="menu">
            <div className="menu_title">MENU</div>
            <div className="menu_list">
                <div className="menu_item">
                    <Link
                        to="/pizza/"
                        className="menu_item_img"
                    >
                        <img
                            src={require("../data/images/pizza/menu_pizza.png")}
                            alt="menu_pizza"
                        />
                    </Link>
                    <Link to="/pizza/">Pizza</Link>
                </div>

                <div className="menu_item">
                    <Link
                        to="/sushi/"
                        className="menu_item_img"
                    >
                        <img
                            src={require("../data/images/sushi/menu_sushi.png")}
                            alt="menu_sushi"
                        />
                    </Link>
                    <Link to="/sushi/">Sushi</Link>
                </div>

                <div className="menu_item">
                    <Link
                        to="/drinks/"
                        className="menu_item_img"
                    >
                        <img
                            src={require("../data/images/drinks/menu_drinks.png")}
                            alt="menu_drinks"
                        />
                    </Link>
                    <Link to="/drinks/">Drinks</Link>
                </div>
            </div>
        </section>
    );
}
