import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loggedInTrue } from "../features/isLoggedIn/isLoggedInSlice";
import { setUserInSession } from "../features/UserInSession/UserInSessionSlice";

export default function SignInForm() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
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
        <form
            className="loginForm"
            onSubmit={signInSubmitHandler}
        >
            <h1>Please sign in</h1>
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

            <button className="submit_button">Log in</button>
        </form>
    );
}
