import React from 'react'
import './deposit.css'
import Paper from '@mui/material/Paper';
import useInputValidation from '../../../hooks/useInputValidation';

const Deposit = () => {
    const {
        value: titleInput,
        // isValueValid: istitleValid,
        // toShowError: titleInputError,
        valueChangeHandler: titleChangeHandler,
        onBlurHandler: titleBlurHandler,
        reset: resettitleInput
    } = useInputValidation(value => value.trim() !== "");
    
    const {
        value: memoInput,
        // isValueValid: ismemoValid,
        // toShowError: memoInputError,
        valueChangeHandler: memoChangeHandler,
        onBlurHandler: memoBlurHandler,
        reset: resetmemoInput
    } = useInputValidation(value => value.trim() !== "");

    const {
        value: amountInput,
        // isValueValid: isamountValid,
        // toShowError: amountInputError,
        valueChangeHandler: amountChangeHandler,
        onBlurHandler: amountBlurHandler,
        reset: resetamountInput
    } = useInputValidation(value => value.trim() !== "");

    const addDepositHandler = (event) => {
        event.preventDefault();
        resettitleInput();
        resetmemoInput();
        resetamountInput();
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
                            <label className="explabel" htmlFor="title">Title</label>
                                <input
                                    className="expinput"
                                    type="text" name="title"
                                    placeholder="Received from"
                                    value={titleInput}
                                    onChange={titleChangeHandler}
                                    onBlur={titleBlurHandler} />
                        </div>
                        <div className="form-field">
                            <label className="explabel" htmlFor="date">Date</label>
                                <input className="expinput" type="date" name="date" placeholder="Date" />
                        </div>
                        <div className="form-field">
                            <label className="explabel" htmlFor="Amount">Amount</label>
                                <input
                                    className="expinput"
                                    type="number"
                                    value={amountInput}
                                    onChange={amountChangeHandler}
                                    onBlur={amountBlurHandler}
                                />
                        </div>
                    </div>
                    <div className="oneline">
                        <div className="form-field">
                            <label className="explabel" htmlFor="memo">Memo</label>
                                <input
                                    className="expinput"
                                    type="text"
                                    placeholder="A brief message"
                                    value={memoInput}
                                    onChange={memoChangeHandler}
                                    onBlur={memoBlurHandler} />
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