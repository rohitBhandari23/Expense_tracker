import React from 'react';
import ExpenseForm from './ExpenseForm';


//here we are passing function as props to ExpenseForm component. saveExpenseDataHandler points to function of same name. 
//This code shows passing of data from child to parent component. we create a new object expenseData in SaveExpenseDataHandler function
//and enteredExpenseData is passed from the saveExpenseDataHandler as its argument ,which contains (object)expenseData 
//Then that argument is spread using the ...(spread operator) and id field is added.

const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    return(
        //(object)expenseData is the argument which comes in place of saveExpenseDataHandler below, when props.onSaveExpenseData(expenseData); is called in ExpenseForm Component. 
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    )
}
export default NewExpense;