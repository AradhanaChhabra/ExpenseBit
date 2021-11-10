import React from 'react'
import finance from '../../assests/finance.svg'
import "../Login/style.scss"

export default function Register(props) {
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
                        <input type="text" name="username" placeholder="Username"></input>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Email Address"></input>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="Password"></input>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button className="btn" type="button">Register</button>
            </div>
            
        </div>
    )
}
