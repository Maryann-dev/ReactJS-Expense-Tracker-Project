import React from 'react';
import { Header } from './Component/Header';
import { Balance } from './Component/Balance';
import { IncomeExpenses } from './Component/IncomeExpenses';
import { TransactionList } from './Component/TransactionList';

import './App.css'

function App() {
  return (
    <div>
      <Header/>
      <div className='Container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
      </div>
    </div>
  );
}

export default App;
