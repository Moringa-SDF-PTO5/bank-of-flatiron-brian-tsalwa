import React from "react";
import AccountManagement from "./AccountManagement";

function TransactionsList({ transactions }) {
  return (
    <table className="custom-table">
      <tbody>
        <tr>
          <th>
            <h3 className="custom-header">Date</h3>
          </th>
          <th>
            <h3 className="custom-header">Description</h3>
          </th>
          <th>
            <h3 className="custom-header">Category</h3>
          </th>
          <th>
            <h3 className="custom-header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {transactions.map((data, key) => {
          return (
            <Transaction
              date={data.date}
              description={data.description}
              category={data.category}
              amount={data.amount}
              key={key}
              id={data.id}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionsList;
