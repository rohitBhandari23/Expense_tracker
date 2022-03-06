import React from 'react';
import './ExpenseDate.css'
const ExpenseDate = (props) => {
    let month = props.date.toLocaleString('en-US', { month: 'long' })
    let day = props.date.toLocaleString('en-US', { day: '2-digit' })
    let year = props.date.getFullYear()

    return (
        <div className='col-lg-3'>
            <div className="expense-date ">
                <div className="expense-date__day">
                    Day:{day}</div>
                <div className="expense-date__month">
                    Month:{month}</div>
                <div className="expense-date__year">
                    Year:{year}
                </div>
            </div>
        </div>

    )
}
export default ExpenseDate;