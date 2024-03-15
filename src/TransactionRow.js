import React from 'react';

function TransactionRow({ transaction, onDelete }) {
  return (
    <tr>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.date}</td>
      <td>{transaction.amount}</td>
      <td><button onClick={onDelete}>Delete</button></td>
    </tr>
  );
}

export default TransactionRow;