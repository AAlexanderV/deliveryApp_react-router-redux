import RegistrationForm from "./RegistrationForm";
import SignInForm from "./SignInForm";

export default function Login() {
    ////// THIS IS FOR TEST only (test-start)
    if (!JSON.parse(localStorage.getItem("users"))) {
        const defaultUserIvan = {
            name: "Ivan",
            email: "ivan@gmail.com",
            phone: "+2310987651329",
            password: "123",
            favourites: [
                "caesar",
                "futomaki",
                "cola",
                "green dragon",
                "pepperoni",
            ],
            cart: [
                { id: "pepperoni", count: 2 },
                { id: "veggie", count: 4 },
                { id: "philadelphia", count: 1 },
                { id: "green-dragon", count: 3 },
            ],
        };
        const defaultUserBob = {
            name: "Bob",
            email: "bob@gmail.com",
            phone: "+2310987651111",
            password: "123",
            favourites: ["caesar", "cola"],
            cart: [{ id: "pepperoni", count: 2 }],
        };
        const USERS = JSON.parse(localStorage.getItem("users")) || [];

        if (
            USERS.findIndex((user) => user.email === defaultUserIvan.email) < 0
        ) {
            USERS.push(defaultUserIvan);
            USERS.push(defaultUserBob);
            localStorage.setItem("users", JSON.stringify(USERS));
        }
    }
    ////// THIS IS FOR TEST only (test-end)

    return (
        <div className="userForms_container">
            <SignInForm />
            <RegistrationForm />
        </div>
    );
}
