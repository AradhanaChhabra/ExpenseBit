import React from 'react'
import finance from '../../assests/wallet.svg'
import "../Login/style.scss"
import useInputValidation from '../../hooks/useInputValidation';

export default function Login(props) {
    const {
        value: usernameInput,
        isValueValid: isUsernameValid,
        toShowError: usernameInputError,
        valueChangeHandler: usernameChangeHandler,
        onBlurHandler: usernameBlurHandler,
        reset: resetUsernameInput
    } = useInputValidation(value => value.trim() !== "");

    const {
        value: passwordInput,
        isValueValid: isPasswordValid,
        toShowError: passwordInputError,
        valueChangeHandler: passwordChangeHandler,
        onBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput
    } = useInputValidation(value => value.trim().length > 6);
    
    const loginHandler = (event) => {
        event.preventDefault();

        if (isUsernameValid && isPasswordValid) {
            console.log("Logged In");
        }
        else console.log("INVALID")

        resetUsernameInput();
        resetPasswordInput();
    }

    return (
        <div className="base-container" ref={props.containerRef}>
            {/* <h3>HACK YOUR EXPENSES!</h3><br/> */}
            <div className="header">
                LOGIN
            </div>
            <br/>
            <div className="content">
                <div className="image">
                    <img src={finance} alt="Finance" height="200px" width ="200px"/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={usernameInput}
                            onChange={usernameChangeHandler}
                            onBlur={usernameBlurHandler}
                        ></input>
                         {usernameInputError&&<p className="error">Enter a valid username</p>}
                    </div>
                    <div className="form-group">
                    <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={passwordInput}
                            onChange={passwordChangeHandler}
                            onBlur={passwordBlurHandler}
                        />
                        {passwordInputError&&<p className="error">Password too short. Try again</p>}
                    </div>
                </div>
            </div>
            <div className="footer">
                <button className="btn" type="sumbit" onClick={loginHandler}>Login</button>
            </div>
        </div>
    )
}
