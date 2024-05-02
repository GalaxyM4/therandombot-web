import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import reportWebVitals from './ts/reportWebVitals';
import './css/index.css';
import App from './App';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();