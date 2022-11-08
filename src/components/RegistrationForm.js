import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loggedInTrue } from "../features/isLoggedIn/isLoggedInSlice";
import { setUserInSession } from "../features/UserInSession/UserInSessionSlice";

export default function RegistrationForm() {
    const [userName, setUserName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errorUserExists, setErrorUserExists] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const registrationSubmitHandler = (e) => {
        e.preventDefault();

        const USERS = JSON.parse(localStorage.getItem("users"));
        const userExists = USERS.findIndex(
            (user) => user.email === userEmail.trim().toLocaleLowerCase()
        );

        if (userExists >= 0) {
            setErrorUserExists(true);
        } else {
            const user = {
                name: userName,
                email: userEmail.trim().toLocaleLowerCase(),
                phone: "+2310987651329",
                password: userPassword,
                favourites: [],
                cart: [],
            };
            USERS.push(user);
            localStorage.setItem("users", JSON.stringify(USERS));

            dispatch(loggedInTrue());
            dispatch(setUserInSession(user));

            navigate("/account");
        }
    };

    return (
        <form
            className="registrationForm"
            onSubmit={registrationSubmitHandler}
        >
            <h1>...or register as a new user =)</h1>
            <div className="wrongUser-Email">
                {errorUserExists && (
                    <p>User with email "{userEmail}" already exists.</p>
                )}
            </div>
            <input
                className="input name_input"
                type="name"
                name="USER_NAME"
                placeholder="Full Name"
                value={userName}
                onChange={(e) => {
                    setUserName(e.target.value);
                }}
            />
            <input
                className="input phone_input"
                type="phone"
                name="USER_PHONE"
                placeholder="Phone number"
                value={userPhone}
                onChange={(e) => {
                    setUserPhone(e.target.value);
                }}
            />
            <input
                className="input email_input"
                type="email"
                name="USER_LOGIN"
                placeholder="example@gmail.com"
                value={userEmail}
                onChange={(e) => {
                    setErrorUserExists(false);
                    setUserEmail(e.target.value);
                }}
            />
            <input
                className="input"
                type="password"
                name="USER_PASSWORD"
                // maxlength="255"
                placeholder="Password"
                autoComplete="off"
                value={userPassword}
                onChange={(e) => {
                    setUserPassword(e.target.value);
                }}
            />
            {/* <input
                type="submit"
                className="submit_button"
                name="sign_up"
                value="Sign up"
            /> */}

            <button className="submit_button">Sign up</button>
        </form>
    );
}
