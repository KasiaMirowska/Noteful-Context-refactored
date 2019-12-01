import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// import Errors from './Errors'
console.log(process.env);

ReactDOM.render(
    // <Errors>
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    // </Errors>  
    document.getElementById('root')
    );
