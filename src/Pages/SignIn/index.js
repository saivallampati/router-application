import React, { useContext } from 'react'
import globalContext from "../../context/globalContext";
import { SignInText } from "../../constants/SignIn"
const SignIn = () => {
    const {
        store: { isAuthenticated },
        setAuthentication,
    } = useContext(globalContext)
    const clickHandler = (event) => {
        setAuthentication(event.target.checked);
    };
    return (
        <>
            <input
                name="authenticated"
                type="checkbox"
                className="checkbox"
                onChange={(e) => clickHandler(e)}
                checked={isAuthenticated}
            />
            <label htmlFor="authenticated">{SignInText.content}</label>
        </>
    );

}

export default SignIn

