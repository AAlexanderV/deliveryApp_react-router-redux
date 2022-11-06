import { useParams } from "react-router-dom";

export default function DrinksItem() {
    let { id } = useParams();
    console.log(id);

    return <section className="pizzaItem">DrinksItem.ID = {id}</section>;
}
