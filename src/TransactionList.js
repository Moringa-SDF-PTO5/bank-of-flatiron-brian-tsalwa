// TransactionList.js
import React from 'react';
import TransactionRow from './TransactionRow';

function TransactionList({ transactions, onDeleteTransaction, onSort }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => onSort('description')}>Description</th>
            <th onClick={() => onSort('category')}>Category</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <TransactionRow
              key={transaction.id}
              transaction={transaction}
              onDelete={() => onDeleteTransaction(transaction.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
