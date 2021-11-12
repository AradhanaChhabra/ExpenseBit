import React from 'react'
import './home.css'

export default function Home() {
    return (
        <div >
            <div className="homediv">
                <h1>Welcome Username!</h1>
                <hr className="homehr"/>
                
                <div className="balance">
                <h3>Current Cash Balance :</h3>
                <h2>₹0.0</h2>
                </div>
            </div>
            <div className="buttons">
                <button className="homebtn">
                    + New Expense
                </button>
                <button className="homebtn">
                    + New Deposit
                </button>
            </div>
        </div>
    )
}
