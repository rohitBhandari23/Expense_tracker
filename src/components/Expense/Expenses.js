import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../Card';

function Expenses(props) {
  const [filteredYear, set__filter_year] = useState('2022');

  const handle__filter_change = (selectedYear) => {
    set__filter_year(selectedYear)
    console.log(selectedYear)
  }
  const filter_expense_data = props.product.filter(products => {
    return products.date.getFullYear().toString() === filteredYear;

  })
  //console.log(filteredYear);
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeYear={handle__filter_change} />
        {filter_expense_data.map((products =>
          <ExpenseItem
            key={products.id}
            title={products.title}
            amount={products.amount}
            date={products.date}
          />))}
      </Card>
    </>
  )
}
export default Expenses;