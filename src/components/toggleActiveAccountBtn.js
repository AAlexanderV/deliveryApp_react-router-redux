export default function toggleActive(e) {
    const btnMap = {
        accountToCartBtn: "accountToFavouritesBtn",
        accountToFavouritesBtn: "accountToCartBtn",
    };

    const btn = document.getElementById(e.target.id);

    if (!btn.classList.contains("active")) {
        btn.classList.add("active");
        document.getElementById(btnMap[e.target.id]).classList.remove("active");
    }
}
