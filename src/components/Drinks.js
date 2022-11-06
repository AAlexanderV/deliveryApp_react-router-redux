import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Drinks() {
    const products = useSelector((state) => state.products.value.drinks);

    return (
        <section className="drinks">
            <div className="drinks_title">Drinks</div>
            <div className="drinks_list">
                {products.map((value) => {
                    return (
                        <div
                            className="drinks_list_item"
                            key={value.id}
                        >
                            <Link to={"/drinks/" + value.id}>
                                <img
                                    src={require(`../data/images/drinks/${value.id}.png`)}
                                    alt="{value.name}"
                                />
                            </Link>
                            <div className="item_name">{value.name}</div>
                            <div className="item_price">{value.price}</div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
