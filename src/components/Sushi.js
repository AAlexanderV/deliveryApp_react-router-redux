import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Sushi() {
    const products = useSelector((state) => state.products.value.sushi);
    console.log(products);

    return (
        <section className="sushi">
            <div className="sushi_title">SUSHI</div>
            <div className="sushi_list">
                {products.map((value) => {
                    if (value.id) {
                        return (
                            <div
                                className="sushi_list_item"
                                key={value.id}
                            >
                                <Link to={"/sushi/" + value.id}>
                                    <img
                                        src={require(`../data/images/sushi/${value.id}.png`)}
                                        alt="{value.name}"
                                    />
                                </Link>
                                <div className="item_name">{value.name}</div>
                                <div className="item_price">{value.price}</div>
                            </div>
                        );
                    } else {
                        return <></>;
                    }
                })}
            </div>
        </section>
    );
}
