import React, { useState } from 'react';
import '../Expense/ExpenseItem.css'
import { Accordion, Card, Button } from 'react-bootstrap';
const ExpenseForm = (props) => {
  const [enteredtitle, setTitle] = useState('') //here we used multiple usestate. we can also make object of usestate along with using prevState and then use it.
  const [enteredAmount, setAmount] = useState('')
  const [enteredDate, setDate] = useState('')

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }
  const AmountChangeHandler = (event) => {
    setAmount(event.target.value);
  }
  const DateChangeHandler = (event) => {
    setDate(event.target.value);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredtitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData); //child to parent data transeferring.

    console.log(expenseData);
    setAmount('');
    setDate('');
    setTitle('');

  }
  const label__color = {
    color: 'black', fontFamily: 'font-family: system-ui;', fontSize: '16px',
    fontWeight: 'normal', float: 'left'
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <form onSubmit={submitHandler}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header><label>Add Expense item</label></Accordion.Header>
                <Accordion.Body>
                  <div className='row'>
                    <div className='col-lg-4'>
                      <div class="form-group">
                        <label style={label__color}>Enter title</label>
                        <input type="text" name="title" value={enteredtitle} onChange={titleChangeHandler} class="form-control" placeholder="Enter title"></input>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div class="form-group">
                        <label style={label__color}>Enter price</label>
                        <input type="number" name="amount" value={enteredAmount} onChange={AmountChangeHandler} class="form-control" placeholder="Enter price"></input>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div class="form-group">
                        <label style={label__color}>Enter date of expense</label>
                        <input type="date" name="date" value={enteredDate} onChange={DateChangeHandler} class="form-control" placeholder="Enter date of expense"></input>
                      </div>
                    </div>
                  </div>
                  <div className='row mt-4'>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4'>
                      <div class="form-group">
                        <Button type="submit" variant="primary" size="md" active>
                          Add Expense
                        </Button>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </form >
        </div>
      </div>
    </div>
  )
}
export default ExpenseForm;