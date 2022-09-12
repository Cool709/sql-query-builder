import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Layout } from './layouts';
import Home from './pages/home';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      {/* todo: add router */}
      <Home />
    </Layout>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
