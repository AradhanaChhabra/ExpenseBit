import React,{useState} from 'react'
import finance from '../../assests/wallet.svg'
import "../Login/style.scss"
import useInputValidation from '../../hooks/useInputValidation';
import * as firebase from 'firebase'

export default function Register(props) {
    // validating form inputs using custom hook
    const {
        value: usernameInput,
        isValueValid: isUsernameValid,
        toShowError: usernameInputError,
        valueChangeHandler: usernameChangeHandler,
        onBlurHandler: usernameBlurHandler,
        reset: resetUsernameInput
    } = useInputValidation(value => value.trim() !== "");

    const {
        value: emailInput,
        isValueValid: isEmailValid,
        toShowError: emailInputError,
        valueChangeHandler: emailChangeHandler,
        onBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInputValidation(value => value.trim() !== "" && value.includes('@'));
    
    const {
        value: passwordInput,
        isValueValid: isPasswordValid,
        toShowError: passwordInputError,
        valueChangeHandler: passwordChangeHandler,
        onBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput
    } = useInputValidation(value => value.trim().length>6);


    const registerHandler = (event) => {
        event.preventDefault();
        // overall form validity
        firebase.auth().createUserWithEmailAndPassword(emailInput, passwordInput)
  .then((userCredential) => {
    console.log(userCredential)
  })
  .catch((error) => {
    console.log(error)
  });

    //storing username
    const UserRef = firebase.database().ref('Todo');
        const user = {
            usernameInput,
        };
    UserRef.push(user);
    
        resetUsernameInput();
        resetEmailInput();
        resetPasswordInput();
    }

      

    return (
        <div className="base-container" ref={props.containerRef}>
            <div className="header">
                REGISTER
            </div>
            <br />
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
                        />
                        {usernameInputError&&<p className="error">Enter a valid username</p>}
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={emailInput}
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                        />
                        {emailInputError&&<p className="error">Enter a valid email address</p>}
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
                <button className="btn" type="submit" onClick={registerHandler}>Register</button>
            </div>
            
        </div>
    )
}
