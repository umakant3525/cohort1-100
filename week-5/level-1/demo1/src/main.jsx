import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import App2 from './App2.jsx';
import Todo from './Todo.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <br />
    <App2/>
    <br />
    <Todo/>
  </React.StrictMode>
);
