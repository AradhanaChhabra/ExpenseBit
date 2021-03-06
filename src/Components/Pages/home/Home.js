import React from 'react'
import { useSelector } from 'react-redux'
import './home.css'
import { Link } from 'react-router-dom'


export default function Home() {

    const username = useSelector((state)=>state.username)

    return (
        <div >
            <div className="homediv">
                <h1>Welcome {username}!</h1>
                <hr className="homehr"/>
                
                <div className="balance">
                <h3>Current Cash Balance :</h3>
                <h2>₹0.0</h2>
                </div>
            </div>
            <div className="buttons">
                <Link to="/expense">
                <button className="homebtn">
                    + New Expense
                </button>
                </Link>
                <Link to="/assets">
                <button className="homebtn">
                    + New Deposit
                </button>
                </Link>
            </div>
        </div>
    )
}
