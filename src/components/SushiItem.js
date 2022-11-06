import { useParams } from "react-router-dom";

export default function SushiItem() {
    let { id } = useParams();
    console.log(id);

    return <section className="sushiItem">SushiItem.ID = {id}</section>;
}
