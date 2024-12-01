import React from 'react';
import './TransactionView.css';

function TransactionView({ transactions }) {
  return (
    <div className="transaction-view">
      <h2>Transactions</h2>
      {transactions.map((transaction) => (
        <div key={transaction.id} className="transaction-item">
          <p>Amount: ${transaction.amount}</p>
          <p>Date: {transaction.date}</p>
          <p>Payment Method: {transaction.paymentMethod}</p>
        </div>
      ))}
    </div>
  );
}

export default TransactionView;
