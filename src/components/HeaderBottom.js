import { Link } from "react-router-dom";

export default function HeaderBottom() {
    // const productsList = useSelector((state) => state.products.value);

    return (
        <div className="header_bottom">
            <Link to="/">Home</Link>
            <nav>
                <Link to="/pizza/">Pizza</Link>
                <Link to="/sushi/">Sushi</Link>
                <Link to="/drinks/">Drinks</Link>
            </nav>
        </div>
    );
}
