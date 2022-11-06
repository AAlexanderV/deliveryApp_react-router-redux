import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="userForms_container">
            <div className="userForm">
                <h1>Sign in</h1>
                <input
                    className="input phone_input"
                    type="tel"
                    name="USER_LOGIN"
                    placeholder="+38(___)___-__-__"
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
                    name="sign_in"
                    value="Enter"
                />
                <Link to="/account/">GO TO ACCOUNT</Link>
            </div>

            <div className="userForm">
                <h1>Sign up</h1>
                <input
                    className="input phone_input"
                    type="tel"
                    name="USER_LOGIN"
                    placeholder="+38(___)___-__-__"
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
            </div>
        </div>
    );
}
