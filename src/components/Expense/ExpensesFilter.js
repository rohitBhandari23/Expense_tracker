import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const yearChangeHandler = (event) => {
    const selectedYear = event.target.value;
    props.onChangeYear(selectedYear)
  };

  const year_list = [
    { label: '2022', value: '2019' },
    { label: '2021', value: '2021' },
    { label: '2020', value: '2020' },
    { label: '2019', value: '2019' },
    { label: '2018', value: '2018' },
    { label: '2017', value: '2017' },
  ];

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          {/* {
            year_list.map((year, key) => {
              console.log("HI");
              <option value={year} id={key}>{year}</option>
            })
          } */}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;