
import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch transactions from the backend API
    fetch('http://localhost:8000/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
        setFilteredTransactions(data);
      })
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  const handleAddTransaction = (newTransaction) => {
    // Post new transaction to the backend API
    fetch('/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTransaction)
    })
    .then(response => response.json())
    .then(data => {
      setTransactions([...transactions, data]);
      setFilteredTransactions([...filteredTransactions, data]);
    })
    .catch(error => console.error('Error adding transaction:', error));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  const handleSort = (criteria) => {
    const sorted = [...filteredTransactions].sort((a, b) => {
      if (criteria === 'description') {
        return a.description.localeCompare(b.description);
      } else if (criteria === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
    setFilteredTransactions(sorted);
  };

  const handleDeleteTransaction = (id) => {
    // Delete transaction from the backend API
    fetch(`/transactions/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
      setTransactions(updatedTransactions);
      setFilteredTransactions(updatedTransactions);
    })
    .catch(error => console.error('Error deleting transaction:', error));
  };

  return (
    <div className="App">
      <h1>$Bank Of Flatiron$</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <TransactionList
        transactions={filteredTransactions}
        onDeleteTransaction={handleDeleteTransaction}
        onSort={handleSort}
      />
    </div>
  );
}

export default App;

