import React from "react";
// import { Transactions } from "./Transactions";

export const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        <li className="minus">
          Cash <span>-$400</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
};

// <>
//       <h3>History</h3>
//       <ul className="list">
//         {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
//       </ul>
//     </>