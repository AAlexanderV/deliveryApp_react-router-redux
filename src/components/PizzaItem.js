import { useParams } from "react-router-dom";

export default function PizzaItem() {
    let { id } = useParams();
    console.log(id);

    return <section className="pizzaItem">PizzaItem.ID = {id}</section>;
}
