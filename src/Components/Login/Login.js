import React from 'react'
import finance from '../../assests/finance.svg'
import "../Login/style.scss"

export default function Login(props) {
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
                        <input type="text" name="username" placeholder="Username"></input>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="Password"></input>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button className="btn" type="button">Login</button>
            </div>
        </div>
    )
}
