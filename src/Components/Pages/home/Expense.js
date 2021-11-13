import React,{ useState } from 'react'
import './expense.css'
import Paper from '@mui/material/Paper';
import { useDispatch,useSelector } from 'react-redux';
import { expense } from '../../../Actions/Actions';


const Expense = () => {

    const uid = useSelector((state)=>state.userid)
    const dispatch = useDispatch();

    const [payee,setPayee] = useState("")
    const [date,setDate] = useState("")
    const [amount,setAmount] = useState("")
    const [memo,setMemo] = useState("")
    const [file,setFile] = useState("")

    const addExpenseHandler = (event) => {
        event.preventDefault();

        const tranID = `ID00${Math.floor(Math.random() * 100000)}`

        const Data = {
            payee,
            date,
            amount,
            memo,
            file,
            tranID
        }

       

        dispatch(expense(Data,tranID,uid))
        window.location.reload()
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
                            <input className="expinput" type="text" name="payee" onChange={(e)=>setPayee(e.target.value)} placeholder="Who did you pay?"/>
                        </div>
                        <div className="form-field">
                            <label className="explabel" htmlFor="date">Date</label>
                            <input className="expinput" type="date" name="date" onChange={(e)=>setDate(e.target.value)} placeholder="Date"/>
                        </div>
                        <div className="form-field">
                            <label className="explabel" htmlFor="Amount">Amount</label>
                            <input className="expinput" type="number" onChange={(e)=>setAmount(e.target.value)} name="Amount" />
                        </div>
                    </div>
                    <div className="oneline">
                        <div className="form-field">
                            <label className="explabel" htmlFor="memo">Memo</label>
                            <input className="expinput" type="text" onChange={(e)=>setMemo(e.target.value)} name="memo" placeholder="A brief message"/>
                        </div>
                        <div className="form-field">
                            <label className="explabel" htmlFor="Attachments">Attachments</label>
                            <input className="expinput" type="file" onChange={(e)=>setFile(e.target.files[0])} name="attachments"/>
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