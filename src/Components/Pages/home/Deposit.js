import React from 'react'
import './deposit.css'
import Paper from '@mui/material/Paper';

const Deposit = () => {
    const addDepositHandler = (event) => {
        event.preventDefault();
    }
    return (
        <>
            <div className="expenseContainer">
                <h1 className="exph1">Deposit</h1>
                <hr className="horizontal"/><br />
                <Paper elevation={0}>
                <div className="expform">
                    <div className="oneline">
                        <div className="form-field">
                            <label className="explabel" htmlFor="payee">Title</label>
                            <input className="expinput" type="text" name="payee" placeholder="Received from"/>
                        </div>
                        <div className="form-field">
                            <label className="explabel" htmlFor="date">Date</label>
                            <input className="expinput" type="date" name="date"  placeholder="Date"/>
                        </div>
                        <div className="form-field">
                            <label className="explabel" htmlFor="Amount">Amount</label>
                            <input className="expinput" type="number" />
                        </div>
                    </div>
                    <div className="oneline">
                        <div className="form-field">
                            <label className="explabel" htmlFor="memo">Memo</label>
                            <input className="expinput" type="text" placeholder="A brief message" />
                        </div>
                        <div className="form-field">
                            <label className="explabel" htmlFor="Attachments">Attachments</label>
                            <input className="expinput" type="file" name="attachments"/>
                        </div>
                    </div>
                </div>
                </Paper>
                <button type="submit" onClick={addDepositHandler} className="expbtn">Add Deposit</button>
        </div>
        </>
    )
}

export default Deposit