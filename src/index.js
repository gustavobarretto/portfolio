import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NavPortfolio } from './components/NavPortfolio';

ReactDOM.render(
  <React.StrictMode>
    <NavPortfolio />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
