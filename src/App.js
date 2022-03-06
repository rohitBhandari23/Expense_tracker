import React, { useState } from 'react';
import './App.css';
import Expenses from "./components/Expense/Expenses";
import Footer from "./components/Footer/footer";
import NewExpense from "./components/NewExpense/NewExpense";
// import Header from "./components/Header/header";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const initalProducts = [
    {
      id: "10001",
      title: "HR dept.",
      amount: '$5000',
      date: new Date(2021, 2, 25),
    },
    {
      id: "10002",
      title: "Finance dept.",
      amount: '$4500',
      date: new Date(2022, 1, 20),
    },
    {
      id: "10003",
      title: "IT dept.",
      amount: '$6500',
      date: new Date(2022, 1, 10),
    },
  ];
  const [products, setNewProducts] = useState(initalProducts);

  const addExpenseHandler = (expenses) => {
    setNewProducts((prevProducts) => {
      return [...prevProducts, expenses];
    });
  };

  return (
    <div className="App">
      {/* <Header /> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses product={products} />
      <Footer />
    </div>
  );
}
export default App;
