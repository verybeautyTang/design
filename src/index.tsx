/*
 * @Author: your name
 * @Date: 2021-06-08 20:45:22
 * @LastEditTime: 2021-06-09 22:38:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beautytang-designs\src\index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
