import React from 'react'
import './expense.css'
import Paper from '@mui/material/Paper';


const Expense = () => {
    const addExpenseHandler = (event) => {
        event.preventDefault();
    }
    return (
        <>
            <div className="expenseContainer">
                <h1 className="exph1">Expense</h1>
                <hr className="horizontal"/><br />
                <Paper elevation={0}>
                <div className="expform">
                    <div className="oneline">
                        <div className="form-field">
                            <label className="explabel" htmlFor="payee">Payee</label>
                            <input className="expinput" type="text" name="payee" placeholder="Who did you pay?"/>
                        </div>
                        <div className="form-field">
                            <label className="explabel" htmlFor="date">Date</label>
                            <input className="expinput" type="date" name="date" placeholder="Date"/>
                        </div>
                        <div className="form-field">
                            <label className="explabel" htmlFor="Amount">Amount</label>
                            <input className="expinput" type="number" name="Amount" />
                        </div>
                    </div>
                    <div className="oneline">
                        <div className="form-field">
                            <label className="explabel" htmlFor="memo">Memo</label>
                            <input className="expinput" type="text" name="memo"/>
                        </div>
                        <div className="form-field">
                            <label className="explabel" htmlFor="Attachments">Attachments</label>
                            <input className="expinput" type="file" name="attachments"/>
                        </div>
                    </div>
                </div>
                </Paper>
                <button type="submit" onClick={addExpenseHandler} className="expbtn">Add Expense</button>
        </div>
        </>
    )
}

export default Expense