import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loggedInTrue } from "../features/isLoggedIn/isLoggedInSlice";
import { setUserInSession } from "../features/UserInSession/UserInSessionSlice";

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

    const [userEmail, setUserEmail] = useState("ivan@gmail.com");
    const [userPassword, setUserPassword] = useState("123");
    const [wrongLoginSubmitted, setwrongLoginSubmitted] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function signInSubmitHandler(e) {
        e.preventDefault();

        const USERS = JSON.parse(localStorage.getItem("users"));

        // Login & password check
        const correctLogin = USERS.find(
            (user) =>
                user.email === userEmail.trim().toLocaleLowerCase() &&
                user.password === userPassword
        );
        if (!correctLogin) {
            setwrongLoginSubmitted(true);
        } else {
            dispatch(loggedInTrue());
            dispatch(setUserInSession(correctLogin));

            navigate("/account");
        }
    }

    return (
        <div className="userForms_container">
            <form
                className="loginForm"
                onSubmit={signInSubmitHandler}
            >
                <h1>Sign in</h1>
                <div className="wrongUser-Email">
                    {wrongLoginSubmitted && <p>Wrong email or password.</p>}
                </div>

                <label>
                    <input
                        type="email"
                        placeholder="Email Address"
                        data-name="email"
                        value={userEmail}
                        onChange={(e) => {
                            setwrongLoginSubmitted(false);
                            setUserEmail(e.target.value);
                        }}
                        required
                    />
                </label>

                <label>
                    <input
                        type="password"
                        placeholder="Password"
                        data-name="password"
                        value={userPassword}
                        onChange={(e) => {
                            setwrongLoginSubmitted(false);
                            setUserPassword(e.target.value);
                        }}
                        required
                    />
                </label>

                <button className="btn">Sign in</button>
            </form>

            <Link to="/account">GO TO ACCOUNT</Link>

            <form className="registrationForm">
                <h1>Sign up</h1>
                <input
                    className="input name_input"
                    type="name"
                    name="USER_NAME"
                    placeholder="Full Name"
                    // value=""
                />
                <input
                    className="input email_input"
                    type="email"
                    name="USER_LOGIN"
                    placeholder="example@gmail.com"
                    // value=""
                />
                <input
                    className="input"
                    type="password"
                    name="USER_PASSWORD"
                    // maxlength="255"
                    autoComplete="off"
                    placeholder="Password:"
                />
                <input
                    type="submit"
                    className="green-button"
                    name="sign_up"
                    value="Sign up"
                />
            </form>
        </div>
    );
}
