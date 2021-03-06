import React from 'react';
import * as  ReactDOMClient from 'react-dom/client';


import App from './App';

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(

    <App />

);


// export NODE_OPTIONS=--openssl-legacy-provider

// "start": "react-scripts --openssl-legacy-provider start"

--openssl-legacy-provider

/*

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

*/