import { React, useContext } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalContext } from "./context/GlobalState";

function App() {
  const context = useContext(GlobalContext);
  console.log(context);
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
