import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Pizzas() {
    const products = useSelector((state) => state.products.value.pizza);

    return (
        <section className="pizzas">
            <div className="pizzas_title">PIZZA</div>
            <div className="pizzas_list">
                {products.map((value) => {
                    return (
                        <div
                            className="pizzas_list_item"
                            key={value.id}
                        >
                            <Link to={"/pizza/" + value.id}>
                                <img
                                    src={require(`../data/images/pizza/${value.id}.png`)}
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
