import React from 'react'
import { useSelector } from 'react-redux'


export default function Home() {

    const username = useSelector((state)=>state.username)

    return (
        <div>
            <h1>Welcome {username}!</h1>
            <hr />
            <button>
                + New Expense
            </button>
            <button>
                + New Deposit
            </button>
        </div>
    )
}
